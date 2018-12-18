import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import './style.scss';

const FormItem = Form.Item;
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (){
        const { name, password } = this.state;
        const data = {
            name,
            password
        };
        console.log(data);
    }

    handleChange(e, name){
        const value = e.target ? e.target.value: e;
        this.setState({
            [name]:value
        });
    }

    render() {
        const { name, password } = this.state;

        return (
            <div className='login_container'>
                <Divider>LOGIN</Divider>

                <div className='login-form'>
                    <FormItem>
                        <Input
                            value={name}
                            onChange={(e) => this.handleChange(e, 'name')}
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            placeholder='Username'/>
                    </FormItem>
                    <FormItem>
                        <Input
                            value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            type='password'
                            placeholder='Password'/>
                    </FormItem>
                    <FormItem>
                        <Checkbox className='logon-remember' checked={true}>Remember me</Checkbox>
                        <a className='login-form-forgot' href=''>
                            Forgot password
                        </a>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                            onClick={this.handleSubmit}
                        >
                            Log in
                        </Button>
                        Or <Link to='/blog/register'>register now!</Link>
                    </FormItem>
                </div>
            </div>
        );
    }
}

export default LoginForm;
