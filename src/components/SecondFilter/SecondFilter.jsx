import { CheckContainer, ContainerFilter, HeaderFilter, Line } from '../FirstFilter/FirstFilter.styled';
import { SvgIcon } from 'components/icons/SvgIcon';
import React, { useEffect, useState } from 'react';

function SecondFilter({ getChangeFilter}) {
  const [type, setType] = useState();

  useEffect(() => {
    // console.log(type);
      getChangeFilter(type);
  }, [type, getChangeFilter]);
  return (
    <>
      <HeaderFilter>Vehicle type</HeaderFilter>
      <Line />
      <ContainerFilter>
        <CheckContainer>
          <SvgIcon
            id="van"
            style={{
              fill: 'var(--dark-text-color)',
              stroke: 'black',
              width: 32,
              height: 32,
            }}
          />
          <p>Van</p>
          <input
            type="radio"
            name="type"
            value="van"
            onChange={event => setType(event.target.value)}
          />
        </CheckContainer>
        <CheckContainer>
          <SvgIcon
            id="fullyIntegrated"
            style={{
              fill: 'var(--dark-text-color)',
              stroke: 'black',
              width: 32,
              height: 32,
            }}
          />
          <p>Fully Integrated</p>
          <input
            type="radio"
            name="type"
            value="fullyIntegrated"
            onChange={event => setType(event.target.value)}
          />
        </CheckContainer>
        <CheckContainer>
          <SvgIcon
            id="alcove"
            style={{
              fill: 'var(--dark-text-color)',
              stroke: 'black',
              width: 32,
              height: 32,
            }}
          />
          <p>Alcove</p>
          <input
            type="radio"
            name="type"
            value="alcove"
            onChange={event => setType(event.target.value)}
          />
        </CheckContainer>
      </ContainerFilter>
    </>
  );
}

export default SecondFilter;
