import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page'
import prize01 from '../../images/prize01.png'
import './style.scss';

export default class Detail extends Component{
  constructor(props){
     super(props)
  }

  render(){
    return (
      <Page>
        <div className='detail_container'>
            <header>this is detail</header>
            <Link to='/'>go home</Link>
            <img src={prize01}/>
        </div>
      </Page>
    )
  }
}
