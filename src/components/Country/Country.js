import React from 'react';
import './Country.css'
import { Link } from 'react-router-dom';

const Country = (props) => {
  const { name, capital, flags } = props.country;
  return (
    <div className='country'>
      <h4>Country Name: {name.common} </h4>
      <h5> Capita : {capital}</h5>
      <img src={flags.png} height="100px" alt="" /><br />
      <Link> See Details of </Link>
    </div>
  );
};

export default Country;