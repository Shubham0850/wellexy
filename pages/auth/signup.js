import { Form, Input, Button, Checkbox } from "antd";

export default function Signup() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="mx-auto my-10 border rounded-sm p-8 max-w-[450px] text-center">
      <h3 className="text-xl font-bold text-green-600 mb-8">Welcome to Wellexy</h3>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Agree to Terms & Condition</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit" block size="large">
            Submit
          </Button>
      </Form>
    </div>
  );
}
