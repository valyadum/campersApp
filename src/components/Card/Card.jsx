import React from 'react';
import { SvgIcon } from 'components/icons/SvgIcon';
import Details from 'components/Details/Details';
import { BtnMore, CardHeader, CardStyle, InfoCont, PriceCont } from './Card.styled';
import Description from 'components/Description/Description';

function Card({ campers }) {
  return (
    <>
      {campers?.map(
        ({
          id,
          name,
          price,
          rating,
          location,
          adults,
          children,
          engine,
          transmission,
          form,
          length,
          width,
          height,
          tank,
          consumption,
          description,
          details,
          gallery,
          reviews,
        }) => {
          return (
            <CardStyle key={id}>
              <img src={gallery[0]} alt={name} />
              <div>
                <CardHeader>
                  <h4>{name}</h4>
                  <PriceCont>
                    <p>&#8364;{price}</p>
                    <button>
                      <SvgIcon
                        id="heart"
                        style={{
                          fill: 'none',
                          stroke: 'black',
                          width: 24,
                          height: 24,
                        }}
                      />
                    </button>
                  </PriceCont>
                </CardHeader>
                <InfoCont>
                  <div>
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
                  </div>
                  <div>
                    <SvgIcon
                      id="map-pin"
                      style={{
                        fill: 'none',
                        stroke: 'black',
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
                <BtnMore type="button">Show more</BtnMore>
              </div>
            </CardStyle>
          );
        }
      )}
    </>
  );
}

export default Card;
