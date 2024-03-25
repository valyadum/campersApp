import React, { useEffect, useState } from 'react';
import { SvgIcon } from 'components/icons/SvgIcon';
import Details from 'components/Details/Details';
import {
  BtnHeart,
  BtnMore,
  CardHeader,
  CardStyle,
  InfoCont,
  PriceCont,
  Rating,
} from './Card.styled';
import Description from 'components/Description/Description';
import Modal from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { addToFavorite } from 'redax/operation';

function Card({ camper }) {
  const [showModal, setShowModal] = useState(false);
  const [idCard, setIdCard] = useState();
  const [favoriteCar, setFavoriteCar] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const showModalToggle = id => {
    setShowModal(!showModal);
    setIdCard(id);
  };

  function onAddToFavorite(id) {
    setFavoriteCar(!favoriteCar);
    setData({
      favorite: favoriteCar,
      id: id,
    });
  }

  const {
    id,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
    favorite
  } = camper;

  useEffect(() => {
    if (data.id) {
      dispatch(addToFavorite(data));
    }
  }, [dispatch, data,favoriteCar]);

  return (
    <>
      <CardStyle key={id}>
        <img src={gallery[0]} alt={name} />
        <div>
          <CardHeader>
            <h4>{name}</h4>
            <PriceCont>
              <p>
                &#8364;
                {price.toFixed(2)}
              </p>
              <BtnHeart onClick={() => onAddToFavorite(id)}>
                <SvgIcon
                  id="heart"
                  style={{
                    fill: ` ${favorite ? 'red' : 'none'}`,
                    stroke: ` ${
                      favorite ? 'red' : 'var(--dark-text-color)'
                    }`,
                    width: 22,
                    height: 22,
                  }}
                />
              </BtnHeart>
            </PriceCont>
          </CardHeader>
          <InfoCont>
            <Rating>
              <SvgIcon
                id="star"
                style={{
                  fill: '#FFC531',
                  stroke: '#FFC531',
                  width: 16,
                  height: 16,
                }}
              />
              {rating}({reviews.length} Reviews)
            </Rating>
            <div>
              <SvgIcon
                id="map-pin"
                style={{
                  fill: 'none',
                  stroke: 'var(--dark-text-color)',
                  width: 16,
                  height: 16,
                }}
              />
              {location}
            </div>
          </InfoCont>
          <Description text={description} />
          <Details
            adults={adults}
            transmission={transmission}
            engine={engine}
            details={details}
          />
          <BtnMore type="button" onClick={() => showModalToggle(id)}>
            Show more
          </BtnMore>
          {showModal && <Modal onClose={showModalToggle} id={idCard} />}
        </div>
      </CardStyle>
    </>
  );
}

export default Card;
