import React from 'react'
import { Card, Row, Col, Statistic } from 'antd'
import { UserOutlined, MedicineBoxOutlined, DollarOutlined, ClockCircleOutlined } from '@ant-design/icons'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'

// Sample static data for charts
const incomeData = [
  { month: 'Jan', income: 2200 },
  { month: 'Feb', income: 2100 },
  { month: 'Mar', income: 2500 },
  { month: 'Apr', income: 2300 },
  { month: 'May', income: 2800 },
  { month: 'Jun', income: 2900 },
]

const userGrowthData = [
  { month: 'Jan', users: 400 },
  { month: 'Feb', users: 450 },
  { month: 'Mar', users: 470 },
  { month: 'Apr', users: 500 },
  { month: 'May', users: 510 },
  { month: 'Jun', users: 523 },
]

const doctorPieData = [
  { name: 'General', value: 15 },
  { name: 'Specialists', value: 9 },
  { name: 'Surgeons', value: 8 },
]

const doctorPieColors = ['#82ca9d', '#0088FE', '#FFBB28']

const Dashboard = () => {
  // Example static data, replace with actual fetched data
  const users = 523
  const doctors = 32
  const income = 18340
  const activities = 127

  return (
    <div style={{ padding: "24px" }}>
      <h2>Admin Dashboard</h2>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Users"
              value={users}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Doctors"
              value={doctors}
              prefix={<MedicineBoxOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Income"
              value={income}
              prefix={<DollarOutlined />}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              suffix="USD"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Activities"
              value={activities}
              prefix={<ClockCircleOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
        <Col xs={24} md={12}>
          <Card title="Monthly Income Overview">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={incomeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="income" stroke="#3f8600" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="User Growth">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#1890ff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
        <Col xs={24} md={8}>
          <Card title="Doctor Types">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie 
                  data={doctorPieData} 
                  dataKey="value" 
                  nameKey="name"
                  cx="50%" 
                  cy="50%" 
                  outerRadius={60}
                  label
                >
                  {
                    doctorPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={doctorPieColors[index % doctorPieColors.length]}/>
                    ))
                  }
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        {/* Expand this row with more charts if needed */}
      </Row>
    </div>
  )
}

export default Dashboard