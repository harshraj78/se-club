import React from 'react';
import './About.css';

function About() {
  return (
    <div id='about-page'>

      <div className='container'>
        <div className='card text-white bg-dark'>
            <h3 className='h3-text'>Who We Are</h3>
            <p className='p-text'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        </div>
        <div className='card text-white bg-dark'>
            <h3 className='h3-text'>What We Do</h3>
            <p className='p-text'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        </div>
        <div className='card text-white bg-dark'>
            <h3 className='h3-text'>What We've Achieved</h3>
            <p className='p-text'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        </div>
      </div>

    </div>
  )
}

export default About