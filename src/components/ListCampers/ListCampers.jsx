import Card from 'components/Card/Card';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from 'redax/operation';
import { campersSelector } from 'redax/selector';
import { CardList, ListSection } from './ListCampers.styled';

function ListCampers() {
  const dispatch = useDispatch();
  const campers = useSelector(campersSelector);
  // const isLoading = useSelector(selectIsLoading);
  console.log(campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <ListSection>
      <CardList>
              <Card campers={campers} />
      </CardList>
    </ListSection>
  );
}

export default ListCampers;
