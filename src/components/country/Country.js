import React, { useState, useEffect } from 'react'
import Cover from '../cover/Cover'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './Country.css'
import Footer from '../footer/Footer'

const Country = () => {

  const params = useParams();

  const [countryData, setCountryData] = useState([])
  const [flag, setFlag] = useState("")
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  const [continent, setContinent] = useState([]);
  const [maps, setMaps] = useState("")


  
  useEffect( () => {
    axios
    .get(`https://restcountries.com/v3.1/name/${params.countryName}`)
    .then( response => {
      setCountryData(response.data[0])
      console.log(countryData);
      setFlag(response.data[0].flags.png)
      setName(response.data[0].name.common)
      setCapital(response.data[0].capital)
      setPopulation(response.data[0].population)
      setContinent(response.data[0].continents)
      setMaps(response.data[0].maps)
  })
  
    },[])


  return (
    <div className='country'>
      <Link to="/"><Cover/></Link>
      <div className='country-details'>
      <article> 
        <img src={flag} alt="flag" onClick={()=>console.log(countryData.name.official)}/>
        <h3>{name}</h3>
        <p>{capital}</p>
        <p>Population: {population}</p>
        {
        continent.map( continent => (
        <p key={continent}>{continent}</p>
        ))
        }
        <a href={maps.googleMaps} target="_blank" rel="noreferrer">Ver en GoogleMaps</a>
      </article>
      </div>
      <Footer />
    </div>
  ) 
}

export default Country



