export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const period = hour < 12 ? 'AM' : 'PM';

  // Convert hour from 24-hour format to 12-hour format
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${month} ${day}, ${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
};
