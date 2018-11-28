import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page'
import './style.scss';

export default class Main extends Component{
  constructor(props){
     super(props)
  }

  render(){
    return (
      <Page>
        <div className='main_container'>
          <header>this is header</header>
          <Link to='/detail'>goto detail</Link>
          <p>this is competitionDetail page</p>
          <div className='box'>
            this is box
          </div>
        </div>
      </Page>
    )
  }
}
