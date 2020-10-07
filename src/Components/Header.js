import React, { Component } from 'react';
import {Zoom} from 'react-reveal';

class Header extends Component {
  render() {



    return (
      <header id="home" >

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a href="https://www.linkedin.com/in/yash-sonar-b89265176/">My Linkedin</a></li>
            <li><a href="https://github.com/Yash-567">My GITHUB</a></li>
            <li><a href="https://www.instagram.com/yash_sonar/?hl=en">IG handle</a></li>
         </ul>

      </nav>

      <Zoom>
      <div className="row banner" >
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Yash Sonar.</h1>
            <h3>I'm a <span>Machine Learning</span> and <span>Web Development</span> enthusiast. I look forward to make help solve real world problems with my skills.</h3>
            <hr />
            <ul className="social">
               <li key="linkedin"><a href="https://www.linkedin.com/in/yash-sonar-b89265176/"><i className="fa fa-linkedin"></i></a></li>
               <li key="github"><a href="https://github.com/Yash-567"><i className="fa fa-github"></i></a></li>
               <li key="facebook"><a href="https://www.facebook.com/yash.sonar.397"><i className="fa fa-facebook"></i></a></li>
               <li key="instagram"><a href="https://www.instagram.com/yash_sonar/?hl=en"><i className="fa fa-instagram"></i></a></li>
            </ul>
         </div>
      </div>
      </Zoom>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
