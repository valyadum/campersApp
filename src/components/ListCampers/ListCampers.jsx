import Card from 'components/Card/Card';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from 'redax/operation';
import { campersSelector, selectIsLoading } from 'redax/selector';
import { CardList, ListSection, LoadMore } from './ListCampers.styled';

function ListCampers() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const camperArray = useSelector(campersSelector);
  const [page, setPage] = useState(1);
  const loadedBefore = useRef(false);
  const [campers, setCampers] = useState([]);
  // const [totalPage, setTotalPage] = useState(4);
  const totalPage = 5;

  // console.log(campers);

  useEffect(() => {
    if (loadedBefore.current) {
      if (page === 1) {
        setCampers(camperArray);
      }
      return;
    }
    loadedBefore.current = true;
    dispatch(fetchCampers(page));
  }, [dispatch, page, camperArray]);

  function onClickLoadMore(event) {
    loadedBefore.current = false;
    setPage(prev => prev + 1);
    // console.log(event);
    //  setPage(page + 1);
    if (page === 1) {
      setCampers(camperArray);
    } else {
      setCampers([...campers, ...camperArray]);
    }

    // console.log(page);
  }
  // console.log(loadedBefore);
  return (
    <ListSection>
      <CardList>
        {campers?.map(camper => <Card key={camper.id} camper={camper} />)}
      </CardList>
      {page < totalPage && (
        <LoadMore type="button" onClick={onClickLoadMore}>
          {isLoading ? 'Loading...' : 'Load More'}
        </LoadMore>
      )}
    </ListSection>
  );
}

export default ListCampers;
