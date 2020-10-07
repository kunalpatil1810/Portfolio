import React, { Component } from 'react';
import {Slide} from 'react-reveal';

class Portfolio extends Component {
  render() {

    return (
      <Slide bottom>
        <section id="portfolio">

        <div className="row work">
        <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>
        <div className="ten columns main-col">
          <div><h3>CREDENZ Tech Days Website</h3>
            <p className="info"><span>&bull;</span> <em className="date">02/2020 – Present</em></p>
            <p>This is the official website for Credenz Tech Days'20 made using
HTML, CSS, Bootstrap 4 and Javascript. It had many animations
and various libraries integrated for swift and beautiful interface.</p>
          </div>
          <div><h3>Chat App</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019-Present</em></p>
            <p>This Web App was made using NodeJs and Socketio library used
for effective communication between different devices. The app
had an easy to use web interface for users to engage.</p>
          </div>
          <div><h3>Web Scraper</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019-Present</em></p>
            <p>This Web Scraper was made for scraping Company data from
their website using Python, Beautiful Soup and Selenium(in case
the page does not load by normal method) which worked
perfectly for long durations without crashing</p>
          </div>
          <div><h3>Text Classifier(Natural Language Processing)</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019</em></p>
            <p>The data input was cleaned and processed properly using tools
provided by NLTK library and then fed to a model for analysis and
classification</p>
          </div>
          <div><h3>Treasure Chaser Game</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019-Present</em></p>
            <p>This game was designed using HTML, CSS, Javascript for
animations and NodeJs . It has a map where the user has to find
the treasure based on the hints given in the game.</p>
          </div>
          <div><h3>Task Manager API</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019-Present</em></p>
            <p>This Task Manager API provides all the basic CRUD operations
for a Task Manager app. It also provides authentication check for
the user before providing valuable data. It is made using NodeJs,
ExpressJs and uses MongoDB as database.</p>
          </div>
          <div><h3>Weather Checker Website</h3>
            <p className="info"><span>&bull;</span> <em className="date">2018-Present</em></p>
            <p>The website uses NodeJs and ExpressJs. It fetches data from
Darksky API and processes it to show on the website page.</p>
          </div>
          <div><h3>Notes Manager</h3>
            <p className="info"><span>&bull;</span> <em className="date">2018-Present</em></p>
            <p>It uses command line arguments to perform CRUD operations
and is made using Node.js and some other npm modules(eg.
Chalk,etc.)</p>
          </div>
          <div><h3>Artificial Neural Network</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019-Present</em></p>
            <p>This Artificial Neural Network performs Deep Learning using Keras. It trains over multiple features of the 10000+ employees like
              age, tenure, gender, country, etc. to learn and predict if an employee will exit the company or not.
            </p>
          </div>
          <div><h3>SVM Classifier</h3>
            <p className="info"><span>&bull;</span> <em className="date">2019-Present</em></p>
            <p>This SVM classifier was made to solve the famous Titanic problem. It trains over multiple features of the people on the ship like
              age, gender,siblings, fare, etc. to learn and predict if an person will die or not.
              The data was well cleaned and imputed and encoded before classifying.
            </p>
          </div>
          </div>
        </div>
        </section>
      </Slide>
    );
  }
}

export default Portfolio;
