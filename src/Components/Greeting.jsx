// display data as props from Home.jsx

import React from "react";

export const Greeting = ({ formData }) => {
  // console.log({formData})
  const name = formData[0];
  const age = formData[1];
  return (
    <div>
      <h3>This is Greeting Page</h3>
      {/* using name and age from props */}
      <h3>{name}</h3>
      <h3>{age}</h3>
    </div>
  );
};
