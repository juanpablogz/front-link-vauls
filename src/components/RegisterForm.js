import React, { Fragment } from "react";
import { Row, Col, Form, Input, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "../../assets/form.css";

export const RegisterForm = ({register}) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    register(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Fragment>
      <Row className="register"> 
        <Col xs={{ span: 24, order: 2 }} sm={{ span: 16, order: 1 }} md={{ span: 16, order: 1 }} lg={{ span: 14, order: 1 }}>
        <img className="logo" src="https://res.cloudinary.com/dutj1bbos/image/upload/v1626812972/b5af65dd9465486da0042f6d44dbc3f5_jz0v5f.png" alt="img"></img>
        <div className="container-form">
          <Form className="form" name="basic" 
              labelCol={{ span: 12, }}
              wrapperCol={{ span: 24, }}
              layout={"vertical"}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
            <h2 className="title-form">Create an account for free</h2>
              <Form.Item name="Username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input placeholder="Username" prefix={"linkvaul/"}  size="large"   />
              </Form.Item>

              <Form.Item name="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input placeholder="Email" prefix={<UserOutlined className="site-form-item-icon" />} size="large"  />
              </Form.Item>

              <Form.Item name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" prefix={<LockOutlined className="site-form-item-icon" />} size="large"   />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  Submit
                </Button>
              </Form.Item>
              <Divider>Login</Divider>
          </Form>
        </div>

        </Col>
        <Col xs={{ span: 24, order: 1 }} sm={{ span: 8, order: 2 }} md={{ span: 8, order: 2 }} lg={{ span: 10, order: 2 }}>
          <img className="img" src="https://res.cloudinary.com/dutj1bbos/image/upload/v1626813243/diego-ph-fIq0tET6llw-unsplash_urevgj.jpg" alt="img"></img>
        </Col>
      </Row>
    </Fragment>
  );
};
