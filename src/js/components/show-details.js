'use strict';

import titleCase from '../utilities/title-case';
import formattedDate from '../utilities/formatted-date';
import calcAge from '../utilities/calc-age';
import daysUntilNextBirthday from '../utilities/days-until-next-birthday';

const $select = document.getElementById('js-selectName');
const $result = document.getElementById('js-resultName');

export default function(data) {
  $select.addEventListener('change', function() {
    const person = data.find(function(user) {
      return user.name === $select.value;
    });
    const html = `<dt>Name</dt>
      <dd>${titleCase(person.name)}</dd>
      <dt>DOB</dt>
      <dd>${formattedDate(person.dob)}</dd>
      <dt>Current age</dt>
      <dd>${calcAge(person.dob)}</dd>
      <dt>Days until next birthday</dt>
      <dd>${daysUntilNextBirthday(person.dob)}</dd>`;
    $result.innerHTML = html;
  });
}
