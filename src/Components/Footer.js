import React, { Component } from 'react';

class Footer extends Component {
  render() {


    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
           <li key="linkedin"><a href="https://www.linkedin.com/in/yash-sonar-b89265176/"><i className="fa fa-linkedin"></i></a></li>
               <li key="github"><a href="https://github.com/Yash-567"><i className="fa fa-github"></i></a></li>
               <li key="facebook"><a href="https://www.facebook.com/yash.sonar.397"><i className="fa fa-facebook"></i></a></li>
               <li key="instagram"><a href="https://www.instagram.com/yash_sonar/?hl=en"><i className="fa fa-instagram"></i></a></li>
           </ul>

           <ul className="copyright">
            <li>Design by <span>Yash Sonar</span></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
