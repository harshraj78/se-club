import React from 'react';
import './Home.css';
import homepage from '../assets/images/sec-homepage.jpg';

function Home() {
  return (
    <div id='home-page'>
        <img src = {homepage} id='hp-id'/>
    </div>
  )
}

export default Home