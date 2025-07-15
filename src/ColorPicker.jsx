import React, {useState} from 'react';
import PaletteDisplay from './PaletteDisplay';

function ColorPicker() {
  const [palette, setPalette] = useState([]);

  const [color, setColor] = useState('#467da0');

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  function handleAddColor() {
    setPalette([...palette, color]);
  }

  return (<div className="color-picker-container">
    <h1>Color Picker</h1>
    <div className="color-display" style={{backgroundColor: color}}>
      <p>Selected Color: {color}</p>
    </div>
    <label>Select a Color:</label>
    <div className="input-container">
      <input type="color" value={color} onChange={handleColorChange}/>
      <button className='add-color-button' onClick={handleAddColor}>Add Color</button>
    </div>
    <PaletteDisplay colors={palette}/>

  </div>)
}

export default ColorPicker