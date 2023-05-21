import React from 'react';
import './Country.css'
import { Link } from 'react-router-dom';

const Country = (props) => {
  const { name, capital, flags } = props.country;
  const OriginalName = name.common;
  return (
    <div className='country'>
      <h4>Country Name: {OriginalName} </h4>
      <h5> Capita : {capital}</h5>
      <img src={flags.png} height="100px" alt="" /><br />
      <Link to={`/details/${OriginalName}`}> See Details of {OriginalName}</Link>
    </div>
  );
};

export default Country;