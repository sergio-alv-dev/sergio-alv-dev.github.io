import React, { Component } from 'react';

import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';

import { Curses } from './components/Curses';
import { sergio } from './person';
import { Portfolio } from './components/Portfolio';



class App extends Component {
  
  render() {
    
    return (
        
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={sergio.avatar}
              name={sergio.name}
              profession={sergio.profession}
              bio={sergio.bio}
              address={sergio.address}
              social={sergio.social} />

          </div>

          <div className='content-wrapper'>

              <div className='content'>
                <Experience experience={ sergio.experience } />
                <Education education={ sergio.education } />
                <Certificates certificates={ sergio.certificates } />
                <Curses courses = { sergio.courses }/>
                
                <Portfolio portfolio={ sergio.portfolio } />

              </div>
          </div>

        </div>
      </header>
      
    );
  }
}

export default App;
