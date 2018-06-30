import React from "react";
import { Link } from "react-router-dom";
import Frame from '../component/Frame'
import image_4 from '../assert/image_4.jpg'
import './style.css'

export default () => (
  <Frame>
    <div class='home-container'>
      <h2>
        <p>this is Home</p>
        <img src={image_4}/>
      </h2>
    </div>
  </Frame>
);
