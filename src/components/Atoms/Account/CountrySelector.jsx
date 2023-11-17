import React, { useState } from 'react';

const YourComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); 

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  
  };

  const countryOptions = [
    'Select a country',
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    
  ];

  return (
    <select className='bg-background   py-[10px] px-[20px] bg-gray-100 w-full h-[60px] ' value={selectedCountry} onChange={handleCountryChange}>
      {countryOptions.map((country, index) => (
        <option key={index} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default YourComponent;