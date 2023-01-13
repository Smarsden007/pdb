import { Radio, Divider } from 'antd';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

function CheckoutTest() {
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorChange = (e) => {
    setSelectedColors(e.target.value);
  };

  return (
    <div>
      <Divider>Select 3 colors</Divider>
      <Radio.Group onChange={handleColorChange} value={selectedColors}>
        {colors.map(color => (
          <Radio value={color} key={color}>
            <div className="color-circle" style={{ backgroundColor: color }}></div>
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
}
