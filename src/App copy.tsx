import { useState } from 'react';
import './App.css'
import { Navigation } from './components/Navigation';

function App2() {


  return (
    

    <div className="w-screen h-screen bg-nightSky flex flex-col items-center justify-center">
      <div className="relative shadow-neon-blue rounded-full w-[80vw] h-[90vh] overflow-hidden bg-glass bg-cover">
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] h-[90vh]">
          <div className="flex flex-col h-[70vh] my-12">
            <div className="mx-auto mt-auto text-neonBlue">
              <div className="hidden md:block relative w-full max-w-3xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-xl rounded-lg p-6 overflow-hidden">
                <div className="flex flex-col my-auto text-left px-8 mr-12">
                  <h1 className="text-2xl font-bold font-vt323 uppercase tracking-widest text-center">
                    Ellie's portfolio
                  </h1>
                  <p className="text-sm text-white/60 mt-2 font-vt323 text-right">[ Data Log: { new Date().getDate() } | Status: Online ]</p>
                  <div className="flex flex-col ml-3 mt-3 font-raleway">
                    <span className="text-2xl my-5">A goal-oriented, collaborative, <b className="text-deepScarlet">frontend-focused</b> web developer.</span>
                    <span>I specialize in Angular, React, and TypeScript, with a focus on writing efficient, maintainable code.</span>
                    <span>I enjoy collaborating to find better solutions through continuous communication.</span>   
                  </div>
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neonBlue"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neonBlue"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neonBlue"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neonBlue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


{/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent animate-scanLine pointer-events-none"></div>
<div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div> 
  <div className="text-neonBlue font-vt323 text-3xl font-bold my-8 animate-slide">
  <span className="animate-blink">Hey, This is Ellie's Portfolio...</span>
</div>  
<div className="relative p-6 bg-black/20 inset-0 bg-[rgba(0,0,0,0.6)] font-vt323">
  <h1 className="text-neonBlue text-2xl font-bold uppercase tracking-widest animate-slide">System log : Hey, This is Ellie's Portfolio...</h1>
</div>   */}