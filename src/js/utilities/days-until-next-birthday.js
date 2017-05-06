export default function(input) {
  'use strict';

  if (typeof input !== 'string') return null;

  const today = new Date();
  const birthday = new Date(input);
  const birthdayDay = birthday.getDate();
  const birthdayMonth = birthday.getMonth();
  const oneDay = 1000*60*60*24;

  const birthdayThisYear = new Date(today.getFullYear(), birthdayMonth, birthdayDay);

  const daysRemaining = Math.ceil((birthdayThisYear.getTime() - today.getTime()) / oneDay);

  if (daysRemaining > 0) {
    return daysRemaining;
  }else {
    const daysInYear = 365;
    const positiveDays = Math.abs(daysRemaining);
    return daysInYear - positiveDays;
  }
}
