export default function(input) {
  'use strict';

  if (typeof input !== 'string') return null;

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date(input);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day} ${monthNames[month]} ${year}`;

  return formattedDate;

}
