import React, { useState } from 'react';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.webp';

const itemImages = {
  'Prashant': img1,
  'Mounika': img2,
  'Kavya': img3,
  'Kritiraj': img4,
  'Siddharth': img5,
  'Piyush': img6,
  'Ayushi': img7,
  'Neha': img8,
  
}

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [items, setItems] = useState(['Prashant', 'Mounika', 'Kavya', 'Kritiraj','Siddharth','Piyush','Ayushi','Neha']); // Replace with your item list
  const [showList, setShowList] = useState(false);
 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowList(true);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setItems(items.filter((i) => i !== item));
    setInputValue('');
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setItems([...items, chip]);
  };

  const handleInputClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="p-4 m-40 mt-10 mb-10">
      <div className='flex  bg-gray-10 flex-col justify-center items-center box shadow-lg shadow-gray-500/50 p-30'>
      <div className="flex flex-row items-center mt-6">
        {showList && (
      <div className="mt-2 flex flex-wrap">
        {chips.map((chip) => (
          <div key={chip} className="bg-gray-200 m-1 px-3 h-8 rounded-xl flex items-center">
            <img src={itemImages[chip]} className='mr-2 w-6 h-6 rounded-xl'/>{chip}
            <button
              onClick={() => handleChipRemove(chip)}
              className="ml-2 text-red-500"
            >
              X
            </button>
          </div>
        ))}
      </div>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        className="p-2 border-2 border-solid h-8 focus:outline-none"
        placeholder="Type to search..."
        />
      </div>
      
      {showList &&(
      <ul className="mt-4 mb-8 py-2 flex gap-1 flex-col border-solid border-2 border-gray-300">
        {items
          .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
          .map((item) => (
              <li key={item} onClick={() => handleItemClick(item)} className="cursor-pointer flex flex-row gap-2 items-center justify-left text-lg  hover:bg-gray-200 px-8 py-1">
                <img src={itemImages[item]} alt={item} className='mr-2 w-6 h-6 rounded-xl'/>{item}
            </li>
          ))}
        </ul>
        )}
        </div>
    </div>
  );
};

export default App;