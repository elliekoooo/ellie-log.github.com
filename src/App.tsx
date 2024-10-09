import { useRef } from 'react';

import './locales/config';

import './App.css';
import 'bulma/css/bulma.min.css';
import 'bulma-switch/dist/css/bulma-switch.min.css';
import { ScrollSection } from 'component/ScrollSection';
import About from 'layout/About';
import Projects from 'layout/Projects';
import Contact from 'layout/Contact';
import Header from 'layout/Header';
import { Navigator } from 'component/Navigator';
import { useSelector } from 'react-redux';
import './locales/config';

export const page = [About, Projects, Contact];

function App() {
  const sectionRefs = useRef<HTMLElement[]>([]);
  const lang = useSelector((state:any)=>state.langReducer);

  return (
    <div>
      <nav className='navbar is-fixed-top is-pulled-right'>
        <div className='navbar-end'>
          <Header></Header>
        </div>
      </nav>
      <div className="columns">
        <div className="column is-11">
          <ScrollSection refs={sectionRefs}>
              {
                  page.map((p,index) => (
                      <section
                          key={index} 
                          className={"section"} 
                          ref={(el:HTMLElement) => sectionRefs.current[index] = el}>
                            { p(lang) }
                      </section>
                  ))
              }
          </ScrollSection>
        </div>
        <div className='column full-height is-flex is-justify-content-center is-align-items-center is-1'>
           <Navigator></Navigator>
        </div>
      </div>
    </div>
  );
}

export default App;