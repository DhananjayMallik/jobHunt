import React, { useContext } from 'react'
import {Context} from '../../main';
import { Navigate } from 'react-router-dom';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import PopularCategory from './PopularCategory';
import PopularCompanies from './PopularCompanies';

const Home = () => {
  const {isAuthorized} = useContext(Context);
  if(!isAuthorized){
    return <Navigate to={"/login"}/>
  }
  return (
    <section className='homepage page'>
      <Hero/>
      <HowItWorks/>
      <PopularCategory/>
      <PopularCompanies/>
    </section>
  )
}

export default Home
