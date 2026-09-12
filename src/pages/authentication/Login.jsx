import { Button, Form, Input } from "antd";
import { useNavigate , useParams } from "react-router-dom";
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {
  const Navegation = useNavigate();
  const perams = useParams()
  return (
    <>
      <style>{`
        .login-page {
          min-height: calc(100vh - 90px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          box-sizing: border-box;
          background: #f0f2f5;
          font-family: Arial, sans-serif;
        }

        .login-box {
          width: 100%;
          max-width: 396px;
          padding: 20px 16px 24px;
          box-sizing: border-box;
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
        }

        .login-logo {
          margin: 0 0 20px;
          color: #1877f2;
          font-size: 52px;
          font-weight: 700;
          letter-spacing: -3px;
          text-align: center;
        }

        .login-form .ant-form-item {
          margin-bottom: 12px;
        }

        .login-form .ant-input,
        .login-form .ant-input-affix-wrapper {
          height: 52px;
          border-color: #dddfe2;
          border-radius: 6px;
          font-size: 16px;
        }

        .login-form .ant-input:focus,
        .login-form .ant-input-affix-wrapper-focused {
          border-color: #1877f2;
          box-shadow: 0 0 0 1px #1877f2;
        }

        .login-button.ant-btn {
          width: 100%;
          height: 48px;
          border: 0;
          border-radius: 6px;
          background: #1877f2;
          font-size: 19px;
          font-weight: 700;
        }

        .login-button.ant-btn:hover {
          background: #166fe5 !important;
        }

        @media (max-width: 480px) {
          .login-page {
            align-items: flex-start;
            padding-top: 48px;
          }
        }
      `}</style>

      <main className="login-page">
        <section className="login-box" aria-label="Login form">
          <p className="login-logo">Academy</p>

          <Form
            className="login-form"
            name="login"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Enter your email" }]}
            >
              <Input placeholder="Email address" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Enter your password" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Button
              className="login-button"
              type="primary"
              htmlType="submit"
              
              onClick={() => {
                Navegation("/about/DarkZone", {
                    state:{
                        name:"Whats Going On 👌"
                    }
                });
                perams('/about/smit')
              }}
            >

              Log in
            </Button>
          </Form>
        </section>
      </main>
    </>
  );
}

export default Login;
