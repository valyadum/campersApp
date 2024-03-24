import FirstFilter from 'components/FirstFilter/FirstFilter';
import LocationInput from 'components/LocationInput/LocationInput';
import SecondFilter from 'components/SecondFilter/SecondFilter';
import { SearchButton } from 'components/SecondFilter/SecondFilter.styled';
import React from 'react'
import { FilterSection, FilterText } from './FiltersSection.styled';

function FiltersSection() {
  function getChangeFilter(param) {
    // console.log(param);
  }
  function sendFilters(event) {
    event.preventDefault();
    console.log('send');
  
}
  return (
    <FilterSection onSubmit={sendFilters}>
      <LocationInput getChangeFilter={getChangeFilter} />
    <div>
        <FilterText>Filters</FilterText>
        <FirstFilter getChangeFilter={getChangeFilter} />
        <SecondFilter getChangeFilter={getChangeFilter} />
  </div>
      <SearchButton onClick={sendFilters}>Search</SearchButton>
    </FilterSection>
  );
}

export default FiltersSection;