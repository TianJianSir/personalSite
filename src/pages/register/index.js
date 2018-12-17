import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, Divider } from 'antd';
import Page from '../../components/Page';
import prize01 from '../../images/prize01.png';
import './style.scss';
import commonStore from '../../utils/commonStore';

const FormItem = Form.Item;

class NormalRegisterForm extends Component {
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
            <div className='register_container'>
                <Divider>Register</Divider>

                <Form onSubmit={this.handleSubmit} className='register-form'>
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
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your Password!'
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
                                placeholder='Confirm Password'
                            />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                        >
                            register
                        </Button>
                        Or <Link to='/blog/login'>login now!</Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalRegisterForm = Form.create()(NormalRegisterForm);

export default WrappedNormalRegisterForm;
