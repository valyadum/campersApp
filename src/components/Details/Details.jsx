import React from 'react';
import { SvgIcon } from 'components/icons/SvgIcon';
import { DetailsBtn, ListDetails } from './Details.styled';

function Details({ adults, transmission, engine, details }) {
  return (
    <ListDetails>
      <DetailsBtn>
        <SvgIcon
          id="persons"
          style={{ fill: '#101828', width: 20, height: 20 }}
        />
        <p>{adults} adults</p>
      </DetailsBtn>
      <DetailsBtn>
        <SvgIcon
          id="automatic"
          style={{ fill: 'none', stroke: '#101828', width: 20, height: 20 }}
        />
        <p>{transmission}</p>
      </DetailsBtn>
      <DetailsBtn>
        <SvgIcon
          id="petrol"
          style={{ fill: '#101828', width: 20, height: 20 }}
        />
        <p>{engine}</p>
      </DetailsBtn>
      <DetailsBtn>
        <SvgIcon
          id="kitchen"
          style={{ fill: 'none', stroke: '#101828', width: 20, height: 20 }}
        />
        <p>Kitchen</p>
      </DetailsBtn>
      <DetailsBtn>
        <SvgIcon
          id="beds"
          style={{ fill: 'none', stroke: '#101828', width: 20, height: 20 }}
        />
        <p>{details.beds} beds</p>
      </DetailsBtn>
      <DetailsBtn>
        <SvgIcon
          id="air-conditioner"
          style={{ fill: 'none', stroke: '#101828', width: 20, height: 20 }}
        />
        <p>AC</p>
      </DetailsBtn>
    </ListDetails>
  );
}

export default Details;
