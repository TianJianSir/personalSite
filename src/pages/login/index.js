import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import { Form, Icon, Input, Button, Checkbox, Divider, notification } from 'antd';
import './style.scss';
import API from '../../api';

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
            password: md5(password)
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

        API.REQUEST('/api/user', 'PUT', data).then((res) => {
            if(res.ret !== 0){
                notification.error({
                    message: '错误信息',
                    description: '输入的账号或密码错误'
                });
            }else{
                notification.success({
                    message: '成功信息',
                    description: '登陆成功,以后会跳到首页去，敬请谅解'
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
