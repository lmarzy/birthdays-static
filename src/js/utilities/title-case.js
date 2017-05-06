export default function(input) {
  'use strict';

  if (typeof input !== 'string') return null;

  const words = input.split(' ');

  const titleCaseWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return titleCaseWords.join(' ');
}
