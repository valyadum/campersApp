import FirstFilter from 'components/FirstFilter/FirstFilter';
import LocationInput from 'components/LocationInput/LocationInput';
import SecondFilter from 'components/SecondFilter/SecondFilter';
import React from 'react'
import { FilterSection } from './FiltersSection.styled';

function FiltersSection() {
  
  function getChangeFilter(param) {
    console.log(param);
  }
  function sendFilters(event) {
    event.preventDefault();
    console.log();
  
}
  return (
    <FilterSection onSubmit={sendFilters}>
      <LocationInput getChangeFilter={getChangeFilter} />
      <div>
        <p>Filters</p>
        <FirstFilter getChangeFilter={getChangeFilter} />
        <SecondFilter getChangeFilter={getChangeFilter} />
      </div>
      <button>Search</button>
    </FilterSection>
  );
}

export default FiltersSection;