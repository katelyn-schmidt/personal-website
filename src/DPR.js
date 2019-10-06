import React from "react";
import { pipelineTopicExpression } from "@babel/types";
import dpr from "./DPR.png";

class DPR extends React.Component {
    render(){
      return( 
            <>
                <img width="175" src={dpr} className="DPR" alt="dpr" align="left"/>
                For UCB’s Society of Women Engineers’ competition team, Team Tech, I designed the circuitry, programmed the Arduino, and designed the mobile app for a Smart Task Light for industry partner DPR Construction
                
            </>
        );
    }
    
  }

export default DPR;