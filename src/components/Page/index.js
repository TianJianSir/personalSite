import React,{ Component } from 'react';
import './style.scss';

export default class Page extends Component{
  constructor(props){
     super(props)
  }

  render(){
    return (
      <div className='Page_container'>
          {this.props.children}
      </div>
    )
  }
}
