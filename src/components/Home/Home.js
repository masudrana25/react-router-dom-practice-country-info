import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountry(data));
  }, []);

  return (
    <div className='home'>
      <h1>Home</h1>
      <h3>Country Total : {country.length}</h3>
      
      <ul>
        {
          country.map(country => <Country country ={country}></Country>)
        }
      </ul>
    </div>
  );
};

export default Home;