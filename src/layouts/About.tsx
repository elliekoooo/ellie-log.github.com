import { useEffect, useRef, useState } from "react";
import { Card } from "../components/Card"
import { Navigation } from "../components/Navigation"

export const About = () => {
    const skills:string[] = ["Javascript", "Typescript", "Github", "Angular", "React", "Java", "HTML", "CSS", "Spring Boot"];

    const [position, setPosition] = useState<number>(0);

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        console.log(position);
        divRef.current?.scrollTo({
            top: position,
            behavior: "smooth"
        });
    }, [ position ]);

    return (
        <div className="w-screen h-screen bg-nightSky flex md:flex-row flex-col items-center justify-center md:gap-20 gap-10">
            <div ref={divRef} className="relative shadow-neon-blue rounded-3xl md:w-[30vw] overflow-y-auto scrollbar-hide w-[90vw] h-[80vh] bg-astronaut bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine"></div>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[80vh]">
                    <Navigation path={"about"}/>
                    <Card direction="col" margin="m-3" font={{color: "neonBlue", weight: "xl", style: "raleway"}}>
                        <h1 className="font-audioWide text-3xl font-bold uppercase tracking-widest text-center">
                            Profile Summary
                        </h1>
                        <div className="font-oxanium text-xl text-white/80 my-2">
                            <p className="my-2">Committed to clean, maintainable code. Implements responsive designs and optimizes web app performance.</p>
                            <p className="my-2">Creates efficient, scalable solutions aligned with project goals.</p>
                            <p className="my-2">Thrives in team environments. Leads projects through open communication and collaboration.</p>
                            <p className="my-2">Contributes to code reviews, brainstorming, and knowledge sharing. Stays current with frontend technologies. Seeks innovative ways to enhance UX, project quality, and functionality.</p>
                        </div>
                    </Card>
                </div>
                <button className="absolute p-2 top-[500px] left-[300px] bg-black/20" onClick={()=>{
                    setPosition(position+100)}
                } >down...</button>
    <button className="relative px-6 py-3 text-black font-orbitron tracking-widest uppercase bg-neonYellow border-2 border-black shadow-[4px_4px_0_#000] transition-all duration-300 hover:shadow-[6px_6px_0_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:shadow-[2px_2px_0_#000]">
      test
    </button>
                
            </div>
            <div className="relative shadow-neon-blue rounded-3xl md:w-[30vw] w-[90vw] h-[80vh] overflow-hidden bg-hud bg-cover">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/20 animate-scanLine2"></div>
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] h-[90vh]">
                    <Card direction="col" margin="mx-auto mt-5" font={{color: "neonBlue", weight: "xl", style: "raleway"}}>
                        <h1 className="font-audioWide text-neonBlue my-2 text-3xl font-bold uppercase tracking-widest text-center">
                            MY SKILLS
                        </h1>
                        <div className="flex flex-col">
                            {
                                skills.map((skill:string, index:number)=> (
                                    <span key={index} className="font-oxanium uppercase min-w-xs my-2 p-2 text-sm border border-neonBlue bg-white/20 text-white text-bold rounded-xl text-center mx-2">{ skill }</span>
                                ))
                            }
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}