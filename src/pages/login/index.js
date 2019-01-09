import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, Divider, notification } from 'antd';
import './style.scss';

const FormItem = Form.Item;
class LoginForm extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit = () => {
        const { login, dispatch } = this.props;
        const { name, password } = login;

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

        dispatch({type: 'login/handleSubmit'});
    }

    handleChange(e, name){
        const value = e.target ? e.target.value: e;
        this.props.dispatch({type: 'login/handleInput', value, name});
    }

    render() {
        const { name, password, isLogin } = this.props.login;

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
                            {isLogin?'已登陆':'Forgot password'}
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

const mapStateToProps = (state) => {
    return {
        login: state.login
    };
};

export default connect(mapStateToProps)(LoginForm);
