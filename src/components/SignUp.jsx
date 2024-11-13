import React from "react";
import Layout from "antd/es/layout/layout";
import Navbar from "./Navbar";
import Card from "antd/es/card/Card";
import { Form, Input, Space } from "antd";
import { Button } from "antd";

const SignUp = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div>
      <Navbar />
      <Space
        size="middle"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "85vh",
        }}
      >
        <Card bordered={false}>
          <Form
            onFinish={handleSubmit}
            layout="horizontal"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 14,
            }}
            style={{maxWidth: 600}}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirm-password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};

export default SignUp;
