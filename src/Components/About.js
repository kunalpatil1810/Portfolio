import React, { Component } from 'react';
import {Slide} from 'react-reveal';

class About extends Component {
  render() {


    return (
      <Slide bottom>
         <section id="about">
      <div className="row">
         <div className="three columns yash">
            <h1 style={{color:"#fff"}}>Yash Sonar</h1>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Student studying in Pune Institute of Technology, Home to a lot of coding geniuses.
Striving everyday to learn new things and developing new and easy to use stuff.
Looking for flexible internships in Web development. Ready to learn new things and work hard!
"It is not enough to do your best: you must KNOW what to do, and THEN do your best."
- W.Edwards Deming</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Yash Sonar</span><br />
						   <span>B-304, Sapphire Park, Park Street, Wakad<br />
						         Pune Maharashtra India, 411057
                   </span><br />
						   <span>+91-9763126056</span><br />
                     <span>yashsonar213@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/open?id=1XvUQzJUTT95_oyeacKS5H8HDO_yTYrK7" download className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
      </Slide>
    );
  }
}

export default About;
