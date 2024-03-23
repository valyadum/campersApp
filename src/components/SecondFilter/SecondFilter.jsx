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
      <p>Vehicle type</p>
      <label>
        <SvgIcon
          id="van"
          style={{
            fill: 'none',
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
      </label>
      <label>
        <SvgIcon
          id="fullyIntegrated"
          style={{
            fill: 'none',
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
      </label>
      <label>
        <SvgIcon
          id="alcove"
          style={{
            fill: 'none',
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
      </label>
    </>
  );
}

export default SecondFilter;
