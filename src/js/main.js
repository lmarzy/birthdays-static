'use strict';

import populateSelect from './components/populate-select';
import showDetails from './components/show-details';
import showThisMonth from './components/show-this-month';

const url = '../people.json';

fetch(url)
.then((resp) => resp.json())
.then(data => {
  populateSelect(data.people);
  showDetails(data.people);
  showThisMonth(data.people);
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});
