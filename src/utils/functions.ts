import dayjs from 'dayjs';

export const formatTime = (date, format = 'YYYY/MM/DD') => {
  if (!date) return undefined;
  return dayjs(date).format(format);
};
