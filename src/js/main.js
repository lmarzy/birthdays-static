'use strict';

import populateSelect from './components/populate-select';

const url = '../people.json';

fetch(url)
.then((resp) => resp.json())
.then(data => {
  populateSelect(data.people);
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});
