import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'dva';
import QueueAnim from 'rc-queue-anim';
import Page from '../../components/Page';
import { Form, Icon, Input, Button, Divider, notification } from 'antd';
import './style.scss';

const FormItem = Form.Item;

@Page
class RegisterForm extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit = () => {
        const { register, dispatch } = this.props;
        const { name, password, confirm_password } = register;

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

        dispatch({type:'register/handleSubmit'});
    }

    handleChange(e, name){
        const value = e.target ? e.target.value: e;
        this.props.dispatch({type: 'register/handleInput', value, name});
    }

    render() {
        const { name, password, confirm_password } = this.props.register;

        return (

            <div className='register_container'>
                <Divider>Register</Divider>

                <div className='register-form'>
                    <QueueAnim delay={300} className='queue-simple'>
                        <FormItem key='form1'>
                            <Input
                                value={name}
                                onChange={(e) => this.handleChange(e, 'name')}
                                prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                placeholder='Username'/>
                        </FormItem>
                        <FormItem key='form2'>
                            <Input
                                name={password}
                                onChange={(e) => this.handleChange(e, 'password')}
                                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                type='password'
                                placeholder='Password'/>
                        </FormItem>
                        <FormItem key='form3'>
                            <Input
                                name={confirm_password}
                                onChange={(e) => this.handleChange(e, 'confirm_password')}
                                prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                type='password'
                                placeholder='Confirm Password'/>
                        </FormItem>
                        <FormItem key='form4'>
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
                    </QueueAnim>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        register: state.register
    };
};

export default connect(mapStateToProps)(RegisterForm);
