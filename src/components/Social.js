import React from 'react';
import './Social.css';

function Social() {
  return (
    <div id = 'social-page' className='social'>
      <h3>Find Software Engineering Club</h3>
      <div className="social-media d-flex flex-row justify-content-center flex-wrap">
        <a href="https://www.linkedin.com/company/amity-seclub" target="_blank">
          <div className="icon fab fa-linkedin-in"></div>
        </a>
        <a href="https://www.instagram.com/se.club_/" target="_blank">
          <div className="icon fab fa-instagram"></div>
        </a>
        <a href="https://www.facebook.com/asecnoida" target="_blank">
          <div className="icon fab fa-facebook-square"></div>
        </a>
      </div>
    </div>
  )
}

export default Social