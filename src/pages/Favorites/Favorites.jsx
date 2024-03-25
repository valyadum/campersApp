import Card from 'components/Card/Card';
import React from 'react';
import {  useSelector } from 'react-redux';
import { campersSelector } from 'redax/selector';
import { Container } from './Favorite.styled';

function Favorites() {
  const camperArray = useSelector(campersSelector);
  const campers = camperArray.filter(camper => camper.favorite === true);
  return (
    <div>
      <Container>
        {campers?.map(camper => (
          <Card key={camper.id} camper={camper} />
        ))}
      </Container>
    </div>
  );
}

export default Favorites;
