import React from 'react'
import Cover from '../cover/Cover'
import Finder from '../finder/Finder'
import Footer from '../footer/Footer'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
      <Cover />
      <Finder />
      <Footer />
    </div>
  )
}

export default Home