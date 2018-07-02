import React,{ Component } from "react";
import Frame from '../component/Frame'
import image_4 from '../assert/image_4.jpg'
import './style.css'

class Home extends Component{
  constructor(props) {
    super(props)
    console.log('this is didmount');
  }

  render(){
    return (
      <Frame>
        <div class='home-container'>
          <h2>
            <p>this is Home</p>
            <img src={image_4} alt='img'/>
          </h2>
        </div>
      </Frame>
    )
  }
}


export default Home
