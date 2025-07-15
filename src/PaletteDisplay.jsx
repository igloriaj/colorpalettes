import PaletteColor from './PaletteColor.jsx';

function PaletteDisplay({colors}) {

  const defaultColor = ['#2a828d'];

  const paletteColors = colors || defaultColor

  const colorsDisplay = paletteColors.map((color, index) => (
    <PaletteColor key={index} color={color} />
  ));

  return (
    <>
    <div className='palette-display' style={{ display: 'flex' }}>
      {colorsDisplay}
    </div>
    </>
  );
}

export default PaletteDisplay;