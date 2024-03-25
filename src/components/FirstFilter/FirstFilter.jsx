import { SvgIcon } from 'components/icons/SvgIcon';
import React, { useEffect, useState } from 'react';
import {
  CheckContainer,
  ContainerFilter,
  HeaderFilter,
  Line,
} from './FirstFilter.styled';

function FirstFilter({ getChangeFilter }) {
  const [equipmentArray, setEquipmentArray] = useState([]);

  function onChecked(event) {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setEquipmentArray([...equipmentArray, value]);
    } else {
      setEquipmentArray(equipmentArray.filter(event => event !== value));
    }
  }
  useEffect(() => {
    console.log(equipmentArray);
    getChangeFilter(equipmentArray);
  }, [equipmentArray, getChangeFilter]);
  return (
    <>
      <HeaderFilter>Vehicle equipment</HeaderFilter>
      <Line />
      <ContainerFilter>
        <CheckContainer>
          <SvgIcon
            id="air-conditioner"
            style={{
              fill: 'none',
              stroke: 'black',
              width: 32,
              height: 32,
            }}
          />
          <p>AC</p>
          <input
            type="checkbox"
            name="equipment"
            value="airConditioner"
            onChange={onChecked}
          />
        </CheckContainer>
        <CheckContainer>
          <SvgIcon
            id="automatic"
            style={{
              fill: 'none',
              stroke: 'var(--dark-text-color)',
              width: 32,
              height: 32,
            }}
          />
          <p>Automatic</p>
          <input
            type="checkbox"
            name="equipment"
            value="automatic"
            onChange={onChecked}
          />
        </CheckContainer>
        <CheckContainer>
          <SvgIcon
            id="kitchen"
            style={{
              fill: 'none',
              stroke: 'var(--dark-text-color)',
              width: 32,
              height: 32,
            }}
          />
          <p>Kitchen</p>
          <input
            type="checkbox"
            name="equipment"
            value="kitchen"
            onChange={onChecked}
          />
        </CheckContainer>
        <CheckContainer>
          <SvgIcon
            id="TV"
            style={{
              fill: 'none',
              stroke: 'var(--dark-text-color)',
              width: 32,
              height: 32,
            }}
          />
          <p>TV</p>
          <input
            type="checkbox"
            name="equipment"
            value="TV"
            onChange={onChecked}
          />
        </CheckContainer>
        <CheckContainer>
          <SvgIcon
            id="shower"
            style={{
              fill: 'none',
              stroke: 'var(--dark-text-color)',
              width: 32,
              height: 32,
            }}
          />
          <p>Shower/WC</p>
          <input
            type="checkbox"
            name="equipment"
            value="shower"
            onChange={onChecked}
          />
        </CheckContainer>
      </ContainerFilter>
    </>
  );
}

export default FirstFilter;
