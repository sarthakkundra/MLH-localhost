import React from 'react'

import { Form, Input, Button } from 'antd';

import '../App.css';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const FullForm = () => {
    
        const onFinish = (values) => {
            console.log('Success:', values);
          };
        
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
        
          return (
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Remarks"
                name="remarks"
                rules={[
                  {
                    required: true,
                    message: 'Please give us some remarks to improve upon :(',
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
        
            
        
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          );
        };
        


export default FullForm
