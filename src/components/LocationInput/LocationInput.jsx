import React, { useEffect, useState } from 'react';
import { SvgIcon } from 'components/icons/SvgIcon';

function LocationInput({ getChangeFilter }) {
  const [location, setLocation] = useState('');

  //   function onChangeLocation(event) {
  //     console.log(event.target.value);
  //     setLocation(event.target.value);
  //   }
  useEffect(() => {
    //   console.log(location);
      getChangeFilter(location);
  }, [location, getChangeFilter]);

  return (
    <>
      <p>Location</p>
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
        <input
          type="text"
          placeholder="Kyiv, Ukraine"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
      </div>
    </>
  );
}

export default LocationInput;
