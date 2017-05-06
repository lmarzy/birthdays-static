'use strict';

import populateSelect from './components/populate-select';
import showDetails from './components/show-details';

const url = '../people.json';

fetch(url)
.then((resp) => resp.json())
.then(data => {
  populateSelect(data.people);
  showDetails(data.people);
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});
