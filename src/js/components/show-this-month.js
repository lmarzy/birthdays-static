'use strict';

import titleCase from '../utilities/title-case';
import daysUntilNextBirthday from '../utilities/days-until-next-birthday';

const $thisMonth = document.getElementById('js-thisMonth');

export default function(data) {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  let html = '';

  data.forEach(person => {
    const dob = new Date(person.dob);
    const dobMonth = dob.getMonth();
    const dobDay = dob.getDate();
    if (dobMonth === month) {
      if (dobDay >= day) {
        html += `<li class="c-thisMonthList_person">
          <span class="c-thisMonthList_name">${titleCase(person.name)}</span>
          <span class="c-thisMonthList_days">${daysUntilNextBirthday(person.dob)}</span>
        </li>`;
        $thisMonth.classList.add('hasBirthdays');
      }
    }
  });

  $thisMonth.innerHTML = html;
}
