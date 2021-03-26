import React, { Component } from 'react';



import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
// import Skills from './components/Skills';
import { Curses } from './components/Curses';
import { sergio } from './person'
// import Darkmode from 'darkmode-js';

// const options = {
//   bottom: '64px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#100f2c',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true // default: true
// }


class App extends Component {
  
  render() {
    
    // const darkmode = new Darkmode(options);
    // darkmode.showWidget();
    
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

              <div className= ''>
                head
              </div>

              <div className='content'>
                <Experience experience={ sergio.experience } />
                <Education education={ sergio.education } />
                <Certificate certificate={ sergio.certificate } />
                <Curses courses = { sergio.courses }/>
                {/* <Skills skills={sergio.skills} /> */}

              </div>
          </div>

        </div>
      </header>
      
    );
  }
}

export default App;
