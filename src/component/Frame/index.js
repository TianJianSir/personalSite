import React from "react";
import { Link } from "react-router-dom";
import { Rate, Icon} from 'antd';

import './style.css'

export default (props) => (
  <div className='frame-container'>
    <div className='slider'>
      <p>这是左边菜单栏</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </div>

    <div className='main'>
      <header>
        <Rate />
        <Icon type="link" />
        this is header
      </header>
      <div className='content'>
        {props.children}
      </div>
    </div>
  </div>
);
