import FiltersSection from 'components/FiltersSection/FiltersSection';
import ListCampers from 'components/ListCampers/ListCampers';
import React from 'react';
import { Page } from './Campers.styled';

function Campers() {
  return (
    <Page>
      <FiltersSection/>
      <ListCampers />
    </Page>
  );
}

export default Campers;
