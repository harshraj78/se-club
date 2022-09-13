import React from 'react';
import './About.css';
import d1 from "../assets/images/d1.png"

function About() {
  return (
    <div id='about-page'>

      <div className='container'>
        <div className='carda text-white bg-dark'>
            <h3 className='h3-text'>Who We Are</h3>
            <p className='p-text'>We are the Software Engineering Club, the official technical club under the Department of Computer Science and Engineering, Amity University, Noida. </p>
        </div>
        <div className='carda text-white bg-dark'>
            <h3 className='h3-text'>What We Do</h3>
            <p className='p-text'>Our club aims to create awareness and guide students about different opportunities which can help them achieve success in the various fields the tech industry has to offer. We organise webinars, seminars, workshops, hackathons, quizzes and many more to achieve the same.</p>
        </div>
        <div className='carda text-white bg-dark'>
            <h3 className='h3-text'>What We've Achieved</h3>
            <p className='p-text'>We have successfully organised several events, competitions and webinars. Apart from this our club has a wholesome environment where students can enhance not just their technical skills, but also their writing, speaking and designing skills.</p>
        </div>
      </div>

      {/* <div>
        <img id = "d1" src={d1} alt="Card image cap"  />
      </div> */}

    </div>
  )
}

export default About