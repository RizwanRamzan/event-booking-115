import { Button, Card, Col, Flex, Form, Input, Row } from 'antd'
import React from 'react'

const Login = () => {

    const storedData = JSON.parse(localStorage.getItem("sign-up-data"))
    const adminData = JSON.parse(localStorage.getItem("adminData"))

    const handleLogin = (values) => {
        if (adminData?.email === values?.email && adminData?.password === values?.password && adminData?.role === "admin") {
            localStorage.setItem("adminToken", "nslfknsakjcnsaldasknxasjcknsalca")
            alert("Admin Login Successfully")
            window.location.pathname = "/"
        }
        else if (storedData?.email === values?.email && storedData?.password === values?.password) {
            localStorage.setItem("userToken", "sdncsdlknalsdnaslkdalsdalnksdlanksdnlasl")
            alert("User Login Successfully")
            window.location.pathname = "/"
        } else {
            alert("Invalid Email or Password")
        }
    }

    return (
        <Flex justify='center' align='center' style={{ height: "100vh" }} >
            <Card title="Login" style={{ width: "60%" }} >
                <Form onFinish={handleLogin} layout='vertical' >
                    <Row gutter={20} >

                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input type={"email"} />
                            </Form.Item>
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col span={24} >
                            <Flex justify='center' >
                                <Button style={{ width: "25%" }} type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Flex>
                            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                                Don't have an account? <a href="/sign-up">Go to Sign Up</a>
                            </div>

                        </Col>
                    </Row>
                </Form>
            </Card>
        </Flex>
    )
}

export default Login