import { useState } from 'react';
import CheckoutTest from '../CheckoutTest';


export const OptionSelector = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <form>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
         Toddler
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Bastile
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Classic Castle
        </label>
      </form>
      {selectedOption === 'Toddler' ? <CheckoutTest />
       : null}
      {selectedOption === 'Bastile' ? <CheckoutTest /> : null}
      {selectedOption === 'Classic Castle' ? <CheckoutTest /> : null}
    </div>
  );
}
