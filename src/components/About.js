import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import bg1 from '../Images/Aboutus.png';
import profile1 from '../Images/profile1.jpg';
import profile2 from '../Images/profile2.png';
import profile3 from '../Images/profile3.png';
import './App.css';

class About extends Component {
  render() {
    return (
      <div>

        <img src={bg1} width="100%" height="900px" alt="" />

        <Fade right>
          <div className="card mb-3" style={{width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:20, marginRight:20, marginBottom:10 }}>
                <img src={profile1} width="200" height="200" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ marginTop:10, fontFamily: "Arial" }}>
                  <h1><b>Ratul Shashank</b><h6> <b>EB22</b></h6></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20 }}>
                  <p>
                    Roll no: E21CSEU0512 <br/>
                     <br/>
                    <a href="https://www.linkedin.com/in/ratul-shashank-705b78240/" style={{ fontWeight: "bold", textDecoration: "none", color: "white" }} >Linkedin</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
         
        <Fade left>
          <div className="card mb-3" style={{left:'23.5%', width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:10, marginRight:20, marginBottom:10 }}>
                <img src={profile2} width="180" height="200" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ marginTop:5, fontFamily: "Arial" }}>
                  <h1><b>Raveesh Kumar</b><h6><b>EB 22</b></h6></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20 }}>
                  <p>
                    Roll no: E21CSEU0513 <br/>
                    <br/>
                    <a href="https://www.linkedin.com/in/raveesh-kumar-a1530b225/" style={{ fontWeight: "bold", textDecoration: "none", color: "white" }} >Linkedin</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="card mb-3" style={{width:'75%', minHeight:'auto', color: 'white', boxShadow: '5px 5px 10px rgb(0, 0, 0)', marginLeft:10, marginTop:10, marginRight:10, marginBottom:10 }}>
            <div class="container-row">
              <div class="hero-image" style={{ marginLeft:10, marginTop:20, marginRight:20, marginBottom:10 }}>
                <img src={profile3} width="200" height="200" alt="" />
              </div>
              <div class="A3L_Slogan">
                <div class="slogan_title" style={{ marginTop:10, fontFamily: "Arial" }}>
                  <h1><b>Sachal Tyagi</b><h6><b>EB 22</b></h6></h1>
                </div>
                <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20 }}>
                  <p>
                    Roll no: E21CSEU0532 <br/>
                    <br/>
                    <a href="https://www.linkedin.com/in/sachal-tyagi-5647a7226/" style={{ fontWeight: "bold", textDecoration: "none", color: "white" }} >Linkedin</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <div class="footerc">
					<div class="container-row">
            <div class="A3L_Slogan">
              <div class="slogan_title" style={{ marginTop:5, fontFamily: "Arial", color:"white" }}>
                <h1><b>DeLoker</b><h6> DTI Project </h6></h1>
              </div>
              <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20, color:"white" }}>
                <p>
                  <h6 style={{ fontWeight: "bold" }}>
                    <a href='https://github.com/RatulShashank/DeLoker/tree/master' style={{ fontWeight: "bold", textDecoration: "none", color: "white" }}>GitHub  </a>
                    |  Team- 6
                  </h6>
                </p>
              </div>
            </div>
          </div>
				</div> 

      </div>
    );
  }
}

export default About;