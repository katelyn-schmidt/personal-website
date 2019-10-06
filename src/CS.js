import React from "react";
import { pipelineTopicExpression } from "@babel/types";
import cs61c from "./cs61c.png";

class CS extends React.Component {
    render(){
      return( 
            <>
                <img src={cs61c} className="CS61C" alt="cs61c" align="left" width="75"/>
                As an Academic Intern on course staff for the computer architecture and machine structures course at UC Berkeley, I assist and answer students’ conceptual questions during lab sections.
                
            </>
        );
    }
    
  }

export default CS;