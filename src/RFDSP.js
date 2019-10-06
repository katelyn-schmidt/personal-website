import React from "react";
import { pipelineTopicExpression } from "@babel/types";
import rfdsp from "./rfdsp.png";

class RFDSP extends React.Component {
    render(){
      return( 
            <>
                <img width="200" src={rfdsp} className="RFDSP" alt="rfdsp" align="left"/>
                As an electrical engineering intern at RF DSP Inc., I researched new equipment for the company to determine feasability of use for active projects and possible future projects.
                
            </>
        );
    }
    
  }

export default RFDSP;