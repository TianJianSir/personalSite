import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import { connect } from 'react-redux';
import './style.scss';
import pic1 from '../../images/1.jpg';
import { addTodo } from '../../redux/actions';

class Main extends Component{
    constructor(props){
        super(props);
    }

    handleAddTodo = () => {
        console.log(this.props);
        const content = 'ceshi';
        this.props.dispatch({type:'ADD_TODO', payload: {content, id:1}});
        // type表示一种action
        // this.props.dispatch({type:'SET_FILTER', payload: {content, id:1}});
        // this.props.addTodo(txt);
    }

    render(){
        return (
            <Page>
                <div className='container'>
                    <button onClick={this.handleAddTodo}>add todo</button>
                    <header>
                        <Link to='/blog/login'>登录</Link>
                        <Link to='/blog/register'>注册</Link>
                    </header>

                    <div className="section">
                        <img src={pic1}/>
                    </div>
                </div>
            </Page>
        );
    }
}

const mapStateToProps = state => {
    const { todos } = state;

    return { todos };
};

export default connect(mapStateToProps)(Main);

