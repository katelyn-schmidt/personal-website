import React from "react";
import { pipelineTopicExpression } from "@babel/types";
import cb from "./codebase.png";

class CB extends React.Component {
    render(){
      return( 
            <>
                <img width="200" src={cb} className="CB" alt="cb" align="left"/>
                At Cal, I am a member of Berkeley Codebase, a software development club on campus dedicated to building a comunity of passionate engineers through meaningful industry initiatives.
            </>
        );
    }
    
  }

export default CB;