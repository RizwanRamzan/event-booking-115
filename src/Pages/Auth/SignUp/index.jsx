import { Button, Card, Col, Flex, Form, Input, Row } from 'antd'
import React from 'react'

const SignUp = () => {

    const handleSignUp=(values)=>{
        console.log(values,"values")
        localStorage.setItem("sign-up-data",JSON.stringify(values))
        localStorage.setItem("userToken","sdncsdlknalsdnaslkdalsdalnksdlanksdnlasl")
        window.location.pathname = "/"
    }

    return (
        <Flex justify='center' align='center'  style={{ height: "100vh" }} >
            <Card title="Sign Up" style={{ width: "60%" }} >
                <Form onFinish={handleSignUp} layout='vertical' >
                    <Row gutter={20} >
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                label="Full Name"
                                name="full_name"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input type={"email"} />
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Form.Item
                                label="Confirm Password"
                                name="confirm password"
                                rules={[{ required: true, message: 'Please input your confirm password!' }]}
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
                            Already have an account? <a href="/login">Go to Login</a>
                        </div>
                
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Flex>
    )
}

export default SignUp