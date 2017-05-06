export default function(input) {
  'use strict';

  if (typeof input !== 'string') return null;

  const today = new Date();
  const birthDate = new Date(input);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
