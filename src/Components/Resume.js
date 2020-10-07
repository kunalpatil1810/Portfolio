import React, { Component } from 'react';
import {Slide} from 'react-reveal';

class Resume extends Component {
  render() {


    return (

        <section id="resume">
          <Slide bottom>
          <div className="row education">
          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <div><h3>Pune Institute Of Computer Technology</h3>
                <p className="info">BE in Computer Engineering.<span>&bull;</span><em className="date">2018-2022</em></p>
                <p>Other than the mainstream skills that the college teached us, I learnt a lot of other important skills like Teamwork, Determination and Perseverance</p>
                </div>
                <div><h3>DAV Public School</h3>
                <p className="info"><span>&bull;</span><em className="date">2006-2016</em></p>
                <p>Other than the mainstream skills that the college teached us, I learnt a lot of other important skills like Teamwork, Determination and Perseverance</p>
                </div>
                </div>
              </div>
          </div>
        </div>
          </Slide>


          <Slide bottom>
          <div className="row work">

          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>

          <div className="nine columns main-col">
          <div><h3>PICT IEEE Student Branch Member</h3>
            <p className="info"><span>&bull;</span> <em className="date">2018-2022</em></p>
            <p>Made me realise the importance of working with a team and interacting with the masses.</p>
          </div>
          <div><h3>Web Weaver Representative</h3>
            <p className="info">Treasure Chaser Game<span>&bull;</span> <em className="date">2019</em></p>
            <p>Developed this game with the team to be played by students at Credenz'19</p>
          </div>
          <div><h3>PICT Startup Cell Member</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019-2022</em></p>
            <p>Developing a product useful for the public.</p>
          </div>
          <div><h3>Rythm flows intern</h3>
            <p className="info"><span>&bull;</span> <em className="date">2020-2021</em></p>
            <p>Data science roll</p>
          </div>
          </div>
          </div>
          </Slide>



      <Slide bottom>
        <div className="row skill">

          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

              <p>My Skills in Technical domain so far!
              </p>

          <div className="bars">
            <ul className="skills">
              <li key="C"><span style={{width:"65%"}}className="bar-expand c"></span><em>C</em></li>
              <li key="C++"><span style={{width:"60%"}}className="bar-expand c++"></span><em>C++</em></li>
              <li key="Node"><span style={{width:"70%"}}className="bar-expand node"></span><em>Node.js</em></li>
              <li key="React"><span style={{width:"70%"}}className="bar-expand react"></span><em>React.js</em></li>
              <li key="Python"><span style={{width:"80%"}}className="bar-expand python"></span><em>Python</em></li>
              <li key="Redux"><span style={{width:"50%"}}className="bar-expand redux"></span><em>Redux</em></li>
              <li key="Express"><span style={{width:"65%"}}className="bar-expand express"></span><em>Express</em></li>
              <li key="Web_Scraping"><span style={{width:"80%"}}className="bar-expand web_scraping"></span><em>Web Scraping</em></li>
              <li key="Pred_analysis"><span style={{width:"90%"}}className="bar-expand pred_analysis"></span><em>Predictive Analysis</em></li>
              <li key="CnC"><span style={{width:"85%"}}className="bar-expand cnc"></span><em>Clustering and Classification</em></li>
              <li key="CnC"><span style={{width:"85%"}}className="bar-expand cnc"></span><em>Neural Networks</em></li>
              <li key="CnC"><span style={{width:"85%"}}className="bar-expand cnc"></span><em>Semantic segmentation</em></li>
              <li key="CnC"><span style={{width:"85%"}}className="bar-expand cnc"></span><em>Deep Learning</em></li>
              <li key="CnC"><span style={{width:"85%"}}className="bar-expand cnc"></span><em>GAN</em></li>
              <li key="CnC"><span style={{width:"85%"}}className="bar-expand cnc"></span><em>Adversial Network</em></li>
            </ul>
          </div>
        </div>
        </div>
      </Slide>
      </section>
    );
  }
}

export default Resume;
