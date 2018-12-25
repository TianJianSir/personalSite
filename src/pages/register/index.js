import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            confirm_password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const { name, password, confirm_password } = this.state;
        const data = {
            name,
            password: md5(password),
            confirm_password: md5(confirm_password)
        };

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

        if(password !== confirm_password){
            notification.error({
                message: '错误信息',
                description: '两次密码不一致'
            });

            return false;
        }

        API.REQUEST('/api/user', 'POST', data).then((res) => {
            if(res.ret !== 0){
                notification.error({
                    message: '错误信息',
                    description: '注册失败'
                });
            }else{
                notification.success({
                    message: '成功信息',
                    description: '注册成功,请登陆，会跳到登陆页'
                });
            }
        });
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
