import { DeleteOutlined } from '@ant-design/icons'
import { Button, Card, Col, Flex, Form, Input, Modal, Row, Table } from 'antd'
import React, { useState } from 'react'

const Doctors = () => {

  const [isModalOpen,setIsModalOpen] = useState(false)
  let data = JSON.parse(localStorage.getItem("doctorList"))
  const [doctorList,setDoctorList] = useState(data || [])

  const [form] = Form.useForm()



  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Specialty',
      dataIndex: 'specialty',
      key: 'specialty',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_,object) => <DeleteOutlined onClick={()=> handleDeletedoctor(object?.id)}  />,
    },
  ];



  const handleCreateDoctor=(values)=>{
    let newDoctors = [...doctorList,{...values,id : doctorList.length + 1}]
    setDoctorList(newDoctors)
    localStorage.setItem("doctorList",JSON.stringify(newDoctors))
    form.resetFields()
    setIsModalOpen(false)
  }


  const handleDeletedoctor = (id)=>{
    const result = doctorList.filter((item) => item?.id != id);
    setDoctorList(result)
    localStorage.setItem("doctorList",JSON.stringify(result))

  }



  return (
    <>
    <Card title="Doctors List" extra={<Button onClick={()=>setIsModalOpen(true)} >+ Add Doctor</Button>} >
      <Table dataSource={doctorList} columns={columns} />
    </Card>


    <Modal footer={false} title={"Add Doctor"} open={isModalOpen} onOk={()=>setIsModalOpen(false)} onCancel={()=>setIsModalOpen(false)}>
    <Form
    form={form}
      layout="vertical"
      name="addDoctorForm"
      onFinish={handleCreateDoctor}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input doctor\'s name!' }]}
          >
            <Input placeholder="Enter doctor's name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input doctor\'s age!' }]}
          >
            <Input type="number" placeholder="Enter doctor's age" />
          </Form.Item>
        </Col>
     
        <Col span={12}>
          <Form.Item
            label="Specialty"
            name="specialty"
            rules={[{ required: true, message: 'Please input specialty!' }]}
          >
            <Input placeholder="Enter specialty" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input address!' }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>
        </Col>
      
        <Col span={12}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input phone number!' }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
        </Col>

        <Col span={24}>
        <Flex justify='center' >
        <Button type='primary' htmlType='submit' >Submit</Button>
        </Flex>
        </Col>
      </Row>
    </Form>
    </Modal>
    </>
  )
}

export default Doctors