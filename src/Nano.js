import React from "react";
import { pipelineTopicExpression } from "@babel/types";
import nanomed from "./nanomed.png";
class Nano extends React.Component {
    render(){
      return( 
            <>
                
                <img width="200" src={nanomed} className="Nanomed" alt="nanomed" align="left"/>
                At Cellular Nanomed Inc., I worked as an electrical engineering intern testing amplifiers and analog-ditigal converters, as well as producing neuron data capture research by practicing various digital signal processing techniques.
                
            </>
        );
    }
    
  }

export default Nano;