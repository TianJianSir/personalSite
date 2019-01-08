import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../redux/actions';

import md5 from 'md5';
import API from '../../api';
import { Form, Icon, Input, Button, Divider, notification } from 'antd';
import './style.scss';

const FormItem = Form.Item;

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            confirmPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const { name, password, confirmPassword } = this.props.register;

        if(!name){
            notification.error({
                message: '错误信息',
                description: '请输入姓名'
            });

            return false;
        }

        if(!password){
            notification.error({
                message: '错误信息',
                description: '请输入密码'
            });

            return false;
        }

        if(password !== confirmPassword){
            notification.error({
                message: '错误信息',
                description: '两次密码不一致'
            });

            return false;
        }

        this.props.dispatch(register.registerSubmit());
    }

    handleChange(e, name){
        const value = e.target ? e.target.value: e;
        this.props.dispatch(register.registerInput(name, value));
    }

    render() {
        const { name, password, confirmPassword } = this.props.register;

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
                            name={confirmPassword}
                            onChange={(e) => this.handleChange(e, 'confirmPassword')}
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

const mapStateToProps = state => {
    const { register } = state;

    return { register };
};

export default connect(mapStateToProps)(RegisterForm);
