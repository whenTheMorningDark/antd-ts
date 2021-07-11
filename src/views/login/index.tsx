import React from "react";
// import { sayHello } from "./util";
// import Cart from "@views/cart";
import { valueTypes } from "@/types/loginTypes";
import { Form, Input, Button, message } from "antd";
import { login } from "@/api/login";
import { setToken, tokenKey } from "@/utils/user";
import { useHistory } from "react-router-dom";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};
const Login: React.FC = () => {
  console.log("login");
  const history = useHistory();
  const onFinish = async (values: valueTypes) => {
    console.log("Success:", values);
    const resultData = await login(values);
    if (resultData.code === 0) {
      message.success("登录成功!");
      // console.log(history);
      setToken(tokenKey, resultData.data.token);
      history.push("/dashboard");
      location.reload();
    } else {
      message.error(resultData.message);
    }
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="userName"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
