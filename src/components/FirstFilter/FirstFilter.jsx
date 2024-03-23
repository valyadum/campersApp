import { SvgIcon } from 'components/icons/SvgIcon';
import React, { useEffect, useState } from 'react'

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
  // function onFilter(event) {
  //     event.preventDefault();
  //     console.log(equipmentArray);

  // }
  useEffect(() => {
    // console.log(equipmentArray);
    getChangeFilter(equipmentArray);
  }, [equipmentArray, getChangeFilter]);
  return (
    <>
      <p>Vehicle equipment</p>
      <label>
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
      </label>
      <label>
        <SvgIcon
          id="automatic"
          style={{
            fill: 'none',
            stroke: 'black',
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
      </label>
      <label>
        <SvgIcon
          id="kitchen"
          style={{
            fill: 'none',
            stroke: 'black',
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
      </label>
      <label>
        <SvgIcon
          id="TV"
          style={{
            fill: 'none',
            stroke: 'black',
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
      </label>
      <label>
        <SvgIcon
          id="shower"
          style={{
            fill: 'none',
            stroke: 'black',
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
      </label>
    </>
  );
}

export default FirstFilter