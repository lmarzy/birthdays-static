'use strict';

import titleCase from '../utilities/title-case';

const $select = document.getElementById('js-selectName');

export default function(data) {
  let html = '<option>Please select a name</option>';
  data.forEach(person => {
    html += `<option value="${person.name}">${titleCase(person.name)}</option>`;
  });
  $select.innerHTML = html;
}
