export default function(str) {
  'use strict';

  const firstLetter = str.charAt(0).toUpperCase();
  const restOfLetters = str.substr(1).toLowerCase();
  return firstLetter + restOfLetters;
}
