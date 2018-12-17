import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import Page from '../../components/Page';
import prize01 from '../../images/prize01.png';
import './style.scss';
import commonStore from '../../utils/commonStore';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className='login_container'>
                <Divider>LOGIN</Divider>

                <Form onSubmit={this.handleSubmit} className='login-form'>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type='user'
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder='Username'
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type='lock'
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                type='password'
                                placeholder='Password'
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className='login-form-forgot' href=''>
                            Forgot password
                        </a>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                        >
                            Log in
                        </Button>
                        Or <Link to='/blog/register'>register now!</Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
