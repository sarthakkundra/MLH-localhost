import React, { useState, useContext } from 'react'

import { Form, Input, Button } from 'antd';

import RemarkContext from '../context/RemarkContext'
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

    const remarkContext = useContext(RemarkContext);
    const { addRemark, getRemarks } = remarkContext;
    
        const onFinish = (values) => {
            console.log('Success:', values);
         

            const newRemark = {
              name: name,
              email: email,
              remarks: remark
            }

            addRemark(newRemark)
          };

          const changeName = (e) => {
            setName(e.target.value);
          }

          const changeEmail = (e) => {
            setEmail(e.target.value)
          }

          const changeRemarks = (e) => {
            setRemark(e.target.value)
          }
        
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
        
          const [name, setName] = useState("");
          const [email, setEmail] = useState("");
          const [remark, setRemark] = useState("");
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
                onChange={changeName}
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
                onChange={changeEmail}
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
                onChange={changeRemarks}
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
