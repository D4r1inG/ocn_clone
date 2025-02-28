import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';

export interface HeadingType {
  id: string;
  text: string;
  level: number;
  ref: Element;
}

interface CurrentActive {
  id: string;
  index: number;
  height: number;
}

export function useTableOfContent() {
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  const [headingsHeight, setHeadingsHeight] = useState<number[]>([]);
  const [currentActive, setCurrentActive] = useState<CurrentActive[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'))
      .filter((element) => element.id)
      .map((element, index) => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1)),
        ref: element,
      }));
    setHeadings(elements);
  }, []);

  const checkVisibleSections = useCallback(() => {
    const { innerHeight, scrollY } = window;
    const newVisibleSections: CurrentActive[] = [];

    for (let sectionIndex = 0; sectionIndex < headings.length; sectionIndex++) {
      const { id, ref } = headings[sectionIndex];

      if (!ref) {
        continue;
      }

      const top = ref.getBoundingClientRect().top + scrollY;
      const nextSection = headings[sectionIndex + 1];
      const bottom = (nextSection?.ref?.getBoundingClientRect().top ?? Infinity) + scrollY;

      if (
        (top > scrollY && top < scrollY + innerHeight) ||
        (bottom > scrollY && bottom < scrollY + innerHeight) ||
        (top <= scrollY && bottom >= scrollY + innerHeight)
      ) {
        newVisibleSections.push({
          height: Number(ref.tagName.substring(1)) === 2 ? 20 : 16,
          id,
          index: sectionIndex,
        });
      }
    }

    // check if the visible sections have changed
    const oldVisibleHeadingIds = currentActive.map((s) => s.id);
    const newVisibleHeadingIds = newVisibleSections.map((s) => s.id);

    const hasChanged = oldVisibleHeadingIds.join() !== newVisibleHeadingIds.join();
    if (hasChanged) setCurrentActive(newVisibleSections);
  }, [currentActive, headings]);

  useEffect(() => {
    window.addEventListener('scroll', checkVisibleSections, { passive: true });
    window.addEventListener('resize', checkVisibleSections);

    return () => {
      window.removeEventListener('scroll', checkVisibleSections);
      window.removeEventListener('resize', checkVisibleSections);
    };
  }, [checkVisibleSections]);

  useLayoutEffect(() => checkVisibleSections());

  const getHeadingsHeight = (val: number) => {
    setHeadingsHeight((prev) => [...prev, val]);
  };

  const lastActiveIndex = useMemo(() => {
    return headings.findIndex(({ id }) => id === currentActive[currentActive.length - 1]?.id);
  }, [headings, currentActive]);

  const currentHeight = useMemo(() => {
    return headingsHeight
      .filter((_, index) => index <= lastActiveIndex)
      .reduce((acc, curr, curIndex) => {
        if (curIndex === lastActiveIndex) {
          return acc + curr / 2;
        }

        return acc + curr;
      }, 0);
  }, [headingsHeight, lastActiveIndex]);

  return {
    activeIds: currentActive.map(({ id }) => id),
    getHeadingsHeight,
    activeIndex: lastActiveIndex,
    currentHeight,
    headings,
  };
}
