import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
// import pic1 from '../../images/1.jpg';

class Main extends React.Component<{},{}>{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='container'>
                <header>
                    <Link to='/blog/login'>登录</Link>
                    <Link to='/blog/register'>注册</Link>
                </header>

                <div className="section">
                    {/* // <img src={pic1}/> */}
                </div>
            </div>
        );
    }
}

export default Main;
