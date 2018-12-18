import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Divider } from 'antd';
import './style.scss';

const FormItem = Form.Item;

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            confirm_password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const { name, password, confirm_password } = this.state;
        const data = {
            name,
            password,
            confirm_password
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
        const { name, password, confirm_password } = this.state;

        return (
            <div className='register_container'>
                <Divider>Register</Divider>

                <div className='register-form'>
                    <FormItem>
                        <Input
                            value={name}
                            onChange={(e) => this.handleChange(e, 'name')}
                            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            placeholder='Username'/>
                    </FormItem>
                    <FormItem>
                        <Input
                            name={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            type='password'
                            placeholder='Password'/>
                    </FormItem>
                    <FormItem>
                        <Input
                            name={confirm_password}
                            onChange={(e) => this.handleChange(e, 'confirm_password')}
                            prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                            type='password'
                            placeholder='Confirm Password'/>
                    </FormItem>
                    <FormItem>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                            onClick={this.handleSubmit}
                        >
                            register
                        </Button>
                        Or <Link to='/blog/login'>login now!</Link>
                    </FormItem>
                </div>
            </div>
        );
    }
}

export default RegisterForm;
