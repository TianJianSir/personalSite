import React from "react";
import { Link } from "react-router-dom";
import Frame from '../component/Frame'
import './style.css'

export default () => (
  <Frame>
    <div class='about-container'>
      <h2>About</h2>
      <Link to='/topics'>goto topics</Link>
    </div>
  </Frame>
);
