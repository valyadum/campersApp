import { SvgIcon } from 'components/icons/SvgIcon';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from 'redax/operation';
import { campersSelector } from 'redax/selector';

function Campers() {
  const dispatch = useDispatch();
  const campers = useSelector(campersSelector);
  // const isLoading = useSelector(selectIsLoading);
  console.log(campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <ul>
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
              <li key={id}>
                <img src={gallery[0]} alt={name} />
                <div>
                  <div>
                    <h4>{name}</h4>
                    <p>&#8364;{price}</p>
                    <button>
                      <SvgIcon
                        id="heart"
                        style={{
                          fill: 'none',
                          stroke: 'black',
                          width: 40,
                          height: 40,
                        }}
                      />
                    </button>
                  </div>

                  <div>
                    <div>
                      {rating}({reviews.length} Reviews)
                    </div>
                    <div>
                      <SvgIcon
                        id="map-pin"
                        style={{
                          fill: 'none',
                          stroke: 'black',
                          width: 40,
                          height: 40,
                        }}
                      />
                      <p>{location}</p>
                    </div>
                  </div>
                  <p>{description}</p>
                  <div>details</div>
                  <button type="button">Show more</button>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}

export default Campers;
