import React, { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

const Setting = ({ modalOpen, setModalOpen }) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [startValue, setStartValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [endValue, setEndValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [numberValue, setNumberValue] = useState(0);
  const [countryOption, setCountryOption] = useState('');
  const [languageOption, setLanguageOption] = useState('');

  const handleCountryChange = (e) => {
    setCountryOption(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguageOption(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberValue(e.target.value);
  };

  const saveKey = async (e) => {
    e.preventDefault();
    let data = {};
    data['startDate'] = startValue.startDate;
    data['endDate'] = startValue.endDate;
    data['language'] = languageOption;
    data['country'] = countryOption;
    data['topnumber'] = numberValue;
    console.log(data);
    setErrorMsg('');
  };

  useEffect(() => {
    if (modalOpen) {
      setStartValue(startValue);
      setEndValue(endValue);
    }
  }, [startValue, endValue, modalOpen]);

  const handleStartValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setStartValue(newValue);
  };

  const handleEndValueChange = (newValue) => {
    console.log('newValue:', newValue);
    setEndValue(newValue);
  };

  return (
    <form
      onSubmit={saveKey}
      className="flex flex-col items-center  h-500 w-500 justify-center gap-2"
    >
      {/* Select start and end date */}
      <p>Select the start and end date</p>
      <Datepicker value={startValue} onChange={handleStartValueChange} />

      <div className="my-2"></div>

      {/* Select top news */}
      <p>Enter top values news number</p>
      <input
        type="number"
        className="bg-white white border-none rounded-md p-2 w-full"
        value={numberValue}
        onChange={handleNumberChange}
      />

      <div className="my-2"></div>

      {/* Select country */}

      <div>
        <label className="block text-gray-700">Select Country:</label>
        <select
          className="block w-full p-2 mt-1 border-none bg-white rounded-md"
          value={countryOption}
          onChange={handleCountryChange}
        >
          <option value="">Select One</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* Display the selected option, if needed */}
        {countryOption && <p className="mt-2">Selected Option: {countryOption}</p>}
      </div>

      <div className="my-2"></div>
      {/* Select lanuage */}

      <div>
        <label className="block text-gray-700">Select Language:</label>
        <select
          className="block w-full border-none bg-white p-2 mt-1 border rounded-md"
          value={languageOption}
          onChange={handleLanguageChange}
        >
          <option value="">Select One</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* Display the selected option, if needed */}
        {languageOption && <p className="mt-2">Selected Option: {languageOption}</p>}
      </div>

      <div className="my-2"></div>

      <button
        className="w-full max-w-xs btn bg-blue-500 text-white border-none hover:bg-blue-500"
        onClick={() => setModalOpen(false)}
      >
        Save
      </button>

      <p>{errorMsg}</p>
    </form>
  );
};

export default Setting;
