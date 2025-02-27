import dynamic from 'next/dynamic';

export const TableOfContent = dynamic(() => import('./main'), {
  ssr: false,
});
