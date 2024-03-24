import { CardHeader,  Rating } from 'components/Card/Card.styled';
import Features from 'components/Features/Features';
import Form from 'components/Form/Form';
import { SvgIcon } from 'components/icons/SvgIcon';
import { CloseBtn } from 'components/Modal/Modal.styled';
import Reviews from 'components/Reviews/Reviews';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneCamper } from 'redax/operation';
import { ChangeBtn, Header, Image, ImgContainer,  NewLine, PlusBox, Price, TextDesc } from './ModalCard.styled';

function ModalCard({ id,onClose }) {
  const [type, setType] = useState(true)
  console.log(id);
  const dispatch = useDispatch();
  const data = useSelector(state => state.campers.camper);
  console.log(data);
  useEffect(() => {
    dispatch(fetchOneCamper(id));
  }, [id, dispatch]);

  const {
    name,
    price,
    rating,
    description,
    gallery,
    reviews,
  } = data;

  return (
    <>
      <Header>
        <CardHeader>{name}</CardHeader>
        <CloseBtn onClick={onClose}>
          <SvgIcon
            id="close-btn"
            style={{
              fill: 'none',
              stroke: 'var(--dark-text-color)',
              width: 32,
              height: 32,
            }}
          />
        </CloseBtn>
      </Header>
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
      <Price>
        <p>
          &#8364;
          {price.toFixed(2)}
        </p>
      </Price>
      <ImgContainer>
        {gallery?.map(image => (
          <Image src={image} key={image} alt={name} />
        ))}
      </ImgContainer>
      <TextDesc>{description}</TextDesc>
      <div>
        <ChangeBtn type="button" onClick={() => setType(true)}>
          Features
        </ChangeBtn>
        <ChangeBtn type="button" onClick={() => setType(false)}>
          Reviews
        </ChangeBtn>
        <NewLine />
      </div>
      <PlusBox>
        {type ? <Features data={data} /> : <Reviews data={reviews} />}
        <Form />
      </PlusBox>

      {/* <LinkContainer>
        <li>
          <Link to="features">Features</Link>
          <hr />
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </LinkContainer>
      <PlusBox>
        <Outlet data={data} />
        <Form /> 
      </PlusBox> */}
    </>
  );
}

export default ModalCard;
