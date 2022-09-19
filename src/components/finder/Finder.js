import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Finder.css'
import { Link } from 'react-router-dom';


const Finder = () => {
  
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  
  useEffect( () => {
    if (country === '') {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then( response => {
          setCountries(response.data);
          console.log("Vacio", countries);
        })
    } else {
      axios
        .get(`https://restcountries.com/v3.1/name/${country}`)
        .then( response => {
          setCountries(response.data)
          console.log("Paises", countries);
        })
    }
  }, [country]

  )
  
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    console.log("cambio", country);
  }
  
  return (
    <main className='finder-container'>
      <h3>Please type a country</h3>
      <input value={country} onChange={handleCountryChange} />
      <div className='finder-list'>
      {
        
        countries.map( country => (
          <Link className='finder-link' key={country.name.common} to={`/country/${country.name.common}`} >
          <article onClick={()=> {console.log(country.name.common);}} className="finder-country">
            <img src={country.flags.png} alt='flag' className='country-img'/>
            <p className='country-name'>{country.name.official}</p>
            <p className='country-capital'>{country.capital}</p>
          </article>
          </Link>
        ))
      }
      </div>

    </main>
  )
}

export default Finder