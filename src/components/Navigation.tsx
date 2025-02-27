import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navigation:React.FC<{path: string}> = ({ path }) => {
    const [selected] = useState<string>(path);
    const menus = ["overview", "about", "projects", "contacts"];
  

    return (
      <aside className="fixed left-10 top-20 h-screen w-screen is-justify-end text-neonBlue text-sm font-orbitron tracking-widest">
        {
            menus.map((name:string, index:number)=> {
              const _selected = `${selected == name ? "text-deepScarlet animate-pulse":""}`;
              return (
                <NavLink to={"/"+name} key={name}>
                  <span className={`py-2 my-1 absolute hover:animate-glitch hover:text-neonBlue cursor-pointer `+_selected} style={{ top: `${index * 30}px` }}>{name}</span>                    
                  <span className={`py-2 my-1 absolute hover:animate-glitch hover:text-neonPurple cursor-pointer `+_selected} style={{ top: `${index * 30}px` }}>{name}</span>                    
                </NavLink>
              );
            })
          }
        </aside>
    )
};