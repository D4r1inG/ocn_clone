import dayjs from 'dayjs';
import clsx from 'classnames';
import { twMerge } from 'tailwind-merge';

export const formatTime = (date, format = 'YYYY/MM/DD') => {
  if (!date) return undefined;
  return dayjs(date).format(format);
};

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}
