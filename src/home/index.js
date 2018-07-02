import React,{ Component } from "react";
import Frame from '../component/Frame'
import image_4 from '../assert/image_4.jpg'
import github from '../api'
import { Button } from 'antd';
import './style.css'

class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.getList = this.getList.bind(this)
  }

  getList(){
    let url = 'https://api.github.com/gists/public'
    let params = ''
    let type = 'get'
    github.getApilist(url,params,type).then((list)=>{
      this.setState({ list })
    })
  }

  render(){
    return (
      <Frame>
        <div className='home-container'>
          <h2>
            <p>this is Home</p>
            <Button type='primary' onClick={this.getList}>
              get list
            </Button>
            <img src={image_4} alt='img'/>
          </h2>
          {
            this.state.list.map((item)=>
              <p>{item.url}</p>
            )
          }
        </div>
      </Frame>
    )
  }
}


export default Home
