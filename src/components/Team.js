import React from 'react';
import './Team.css';
import akanksha from "../assets/images/akanksha2.jpg" 
import naman from "../assets/images/naman.jpeg"
import shruti from "../assets/images/shruti.jpg"
import shivangi from "../assets/images/shivangi.jpg"
import gauri from "../assets/images/gauri.JPG"
import prince from "../assets/images/Prince.png"



function Team() {
  return (
    <div id='team-page'>
      <div className='heading'>
        CLUB HEADS
      </div>
      <div className='container'>
        <div className="card text-center">
          <img className="card-img-top img-card" src={shivangi} alt="Card image cap" height={300} width={15} />
          <div className="card-body">
            <h5 className="card-title">PRESIDENT</h5>
            <p className="card-text">Shivangi Pathak</p>
          </div>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/shivangipathak28/" target="_blank">
              <div className="card-links icon fab fa-linkedin-in"></div>
            </a>
          </div>
        </div>

        <div className="card text-center">
          <img className="card-img-top img-card" src={prince} alt="Card image cap" height={300} width={15} />
          <div className="card-body">
            <h5 className="card-title">VICE-PRESIDENT</h5>
            <p className="card-text">Prince Sindhu</p>
          </div>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/prince-sindhu/" target="_blank">
              <div className="card-links icon fab fa-linkedin-in"></div>
            </a>
            <a href="https://github.com/XOPRINCEXO" target="_blank">
              <div className="card-links icon fab fa-github"></div>
            </a>
          </div>
        </div>

        <div className="card text-center">
          <img className="card-img-top img-card" src={gauri} alt="Card image cap" height={300} width={15} />
          <div className="card-body">
            <h5 className="card-title">GENERAL SECRETARY</h5>
            <p className="card-text">Gauri Gupta</p>
          </div>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/gauri-gupta-98a64119b/" target="_blank">
              <div className="card-links icon fab fa-linkedin-in"></div>
            </a>
          </div>
        </div>
      </div>

      <div className='heading second-heading'>
        CLUB LEADS
      </div>
      <div className='container'>
        <div className="card text-center">
          <img className="card-img-top img-card" src={akanksha} alt="Card image cap" height={300} width={15} />
          <div className="card-body">
            <h5 className="card-title">EVENT LEAD</h5>
            <p className="card-text">Akanksha Kushwaha</p>
          </div>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/akankshakushwaha/" target="_blank">
              <div className="card-links icon fab fa-linkedin-in"></div>
            </a>
            <a href="https://www.github.com/aku1310" target="_blank">
              <div className="card-links icon fab fa-github"></div>
            </a>
          </div>
        </div>

        <div className="card text-center">
          <img className="card-img-top img-card" src={naman} alt="Card image cap" height={300} width={15} />
          {/* <img src = {require("../images/songsillu.png")} id = "songsillu" alt = 'nfsbg' /> */}
          <div className="card-body">
            <h5 className="card-title">TECHNICAL LEAD</h5>
            <p className="card-text">Naman Gaur</p>
          </div>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/naman-gaur-054b581aa/" target="_blank">
              <div className="card-links icon fab fa-linkedin-in"></div>
            </a>
            <a href="https://www.github.com/namangaur2" target="_blank">
              <div className="card-links icon fab fa-github"></div>
            </a>
          </div>
        </div>

        <div className="card text-center">
          <img className="card-img-top img-card" src={shruti} alt="Card image cap" height={300} width={15} />
          <div className="card-body">
            <h5 className="card-title">MANAGEMENT LEAD</h5>
            <p className="card-text">Shruti Gupta</p>
          </div>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/shruti-gupta-36244b1b6//" target="_blank">
              <div className="card-links icon fab fa-linkedin-in"></div>
            </a>
            <a href="https://www.github.com/shru1032" target="_blank">
              <div className="card-links icon fab fa-github"></div>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Team