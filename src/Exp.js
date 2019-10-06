import React from "react";
import { pipelineTopicExpression } from "@babel/types";
import rfdsp from "./rfdsp.png";
import nanomed from "./nanomed.png";
import cb from "./codebase.png";
import cs61c from "./cs61c.png";
import dpr from "./DPR.png";
import ohp from "./ohp.png";
const exp_data = [
    {logo: rfdsp, info: "As an electrical engineering intern at RF DSP Inc., I researched new equipment for the company to determine feasability of use for active projects and possible future projects."},
    {logo: nanomed, info: "At Cellular Nanomed Inc., I worked as an electrical engineering intern testing amplifiers and analog-ditigal converters, as well as producing neuron data capture research by practicing various digital signal processing techniques."}, 
    {logo: cb, info: "At Cal, I am a member of Berkeley Codebase, a software development club on campus dedicated to building a comunity of passionate engineers through meaningful industry initiatives."},
    {logo: cs61c, info: "As an Academic Intern on course staff for the computer architecture and machine structures course at UC Berkeley, I assist and answer students’ conceptual questions during lab sections."}, 
    {logo: dpr, info: "For UCB’s Society of Women Engineers’ competition team, Team Tech, I designed the circuitry, programmed the Arduino, and designed the mobile app for a Smart Task Light for industry partner DPR Construction."}, 
    {logo: ohp, info: "I designed the logo and newsletter layouts for the Society of Women Engineers’ Overnight Host Program."}
  ];
class Exp extends React.Component {
    render(){
      return( 
            <>
                <>
                <img width="200" src={rfdsp} className="RFDSP" alt="rfdsp" align="left"/>
                As an electrical engineering intern at RF DSP Inc., I researched new equipment for the company to determine feasability of use for active projects and possible future projects.
                </>
                <>
                <img width="200" src={nanomed} className="Nanomed" alt="nanomed" align="left"/>
                At Cellular Nanomed Inc., I worked as an electrical engineering intern testing amplifiers and analog-ditigal converters, as well as producing neuron data capture research by practicing various digital signal processing techniques.
                </>
                <>
                <img width="200" src={cb} className="CB" alt="cb" align="left"/>
                At Cal, I am a member of Berkeley Codebase, a software development club on campus dedicated to building a comunity of passionate engineers through meaningful industry initiatives.
                </>
                <>
                <img src={cs61c} className="CS61C" alt="cs61c" align="left"/>
                As an Academic Intern on course staff for the computer architecture and machine structures course at UC Berkeley, I assist and answer students’ conceptual questions during lab sections.
                </>
                <>
                <img width="200" src={dpr} className="DPR" alt="dpr" align="left"/>
                For UCB’s Society of Women Engineers’ competition team, Team Tech, I designed the circuitry, programmed the Arduino, and designed the mobile app for a Smart Task Light for industry partner DPR Construction
                </>
                <>
                <img width="200" src={ohp} className="OHP" alt="ohp" align="left"/>
                I designed the logo and newsletter layouts for the Society of Women Engineers’ Overnight Host Program.
                </>
            </>
        );
    }
    
  }

export default Exp;