import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { OriginalName } = useParams();
  console.log(OriginalName)
  return (
    <div>
      <h1>Details of {OriginalName}</h1>

    </div>
  );
};

export default CountryDetails;