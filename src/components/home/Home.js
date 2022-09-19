import React from 'react'
import Cover from '../cover/Cover'
import Finder from '../finder/Finder'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
      <Cover />
      <Finder />
    </div>
  )
}

export default Home