import React from "react";
import map from './map2.png';
class About extends React.Component {
    render(){
      return (
          <>
        <img width="350" src={map} className="Map-pic" alt="map" align="left"/>
       <p> I’m currently a third year EECS student at UC Berkeley pursuing a career in software engineering. I’ve also explored work opportunities in electrical engineering, as I have an interest in the mathematics and theory behind electrical engineering concepts! <br></br>

      I am originally from Orange County, California, so I love exploring new places in the Bay Area. In my free time I enjoy discovering new music, cooking, and most of all, eating! </p>
      </>
      );
    }
  }

export default About;