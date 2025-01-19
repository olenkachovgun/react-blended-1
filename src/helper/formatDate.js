import { formatDistanceToNow } from 'date-fns';

export const fotmatedDateToNow = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });

// export default function formatDateToNow(date) {
//   return formatDistanceToNow(new Date(date), { addSuffix: true });
// }
