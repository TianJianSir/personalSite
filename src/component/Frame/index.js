import React from "react";
import { Link } from "react-router-dom";
import { Button, Rate, Icon} from 'antd';

import './style.css'

export default (props) => (
  <div class='frame-container'>
    <div class='slider'>
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

    <div class='main'>
      <header>
        <Button type='primary'>this is antd button</Button>
        <Rate />
        <Icon type="link" />
        this is header
      </header>
      <div class='content'>
        {props.children}
      </div>
    </div>
  </div>
);
