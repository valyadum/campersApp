import React, { useEffect, useState } from 'react';
import { SvgIcon } from 'components/icons/SvgIcon';
import { InputField, Text } from './LocationInput.styled';

function LocationInput({ getChangeFilter }) {
  const [location, setLocation] = useState('');

  useEffect(() => {
    getChangeFilter(location);
  }, [location, getChangeFilter]);

  return (
    <>
      <Text>Location</Text>
      <InputField>
        <SvgIcon
          id="map-pin"
          style={{
            fill: 'none',
            stroke: 'var(--dark-text-color)',
            width: 18,
            height: 20,
          }}
        />
        <input
          type="text"
          placeholder="Kyiv, Ukraine"
          value={location}
          onChange={event => setLocation(event.target.value)}
        />
      </InputField>
    </>
  );
}

export default LocationInput;
