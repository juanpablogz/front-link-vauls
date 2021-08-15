import React from "react";
import useAuth from "../auth/useAuth";
import useAppProvider from "../appContext/useAppProvider";
import {  Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
export const CoreApp = () => {
  const { username } = useAuth();
  const { addNewLink } = useAppProvider();
  const onFinish = (link) => {
    console.log("Success:", link);
    addNewLink(link);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <h1>Bienvenido {username}</h1>
      <Form
        className="form"
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
          ]}
        >
          <Input
            placeholder="title"
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="original_url"
          rules={[
            {
              required: true,
              message: "Please input your Link!",
            },
          ]}
        >
          <Input
            placeholder="Link"
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Add new link
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
