import React, { forwardRef } from "react";

const Form = forwardRef(({ handleChangeCity, city, handleSubmitCity }, ref) => {
  return (
    <>
      <select
        name="city"
        id="city"
        onChange={handleChangeCity}
        value={city}
        className="w-full text-black border-none rounded-sm focus-visible:outline-none"
      >
        <option value="Kyiv">Kyiv</option>
        <option value="Paris">Paris</option>
        <option value="London">London</option>
      </select>
      <input
        type="text"
        placeholder={city}
        ref={ref}
        className="text-black"
      />
      <button
        onClick={handleSubmitCity}
        className="text-black border border-sky-500 text-base bg-white"
      >
        Search
      </button>
    </>
  );
});

export default Form;
