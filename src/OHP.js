import React from "react";
import { pipelineTopicExpression } from "@babel/types";
import ohp from "./ohp.png";

class OHP extends React.Component {
    render(){
      return( 
            <>
                <img width="200" src={ohp} className="OHP" alt="ohp" align="left"/>
                I designed the logo and newsletter layouts for the Society of Women Engineers’ Overnight Host Program.
            </>
        );
    }
    
  }

export default OHP;