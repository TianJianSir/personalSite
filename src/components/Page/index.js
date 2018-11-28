import React,{ Component } from 'react';
import './style.scss';

export default class Page extends Component{
  constructor(props){
     super(props)
  }

  render(){
    return (
      <div className='Page_container'>
        <p>this is page component</p>
          {this.props.children}
      </div>
    )
  }
}
