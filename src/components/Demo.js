import React from 'react';
import { Link } from 'react-router-dom';

function Demo(){
  return (
    <div className="Demo">
    <h5>Demo</h5>

    <h6><Link to="/">Home</Link></h6>
    <h6><Link to="/eula">EULA</Link></h6>
    <h6><Link to="/index">Index</Link></h6>

    <style>{
      `
      .Demo {
        position: absolute;
        bottom: 0;
        left: 0;
        color: #555555;
        background-color: #e9f5fb;
        border-radius: 5px;
        border: 5px dashed #ea457b;
        padding: 5px;
        margin: 5px;
      }
      `
    }</style>
    </div>
  );
}

export default Demo;
