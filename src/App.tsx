// import { useState } from 'react'
import './components/Card.css'
import { Card } from './components/Card'
import { Button, Row, Col } from 'antd';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='card-container'>

      <Row gutter={[48, 16]} justify="center" align="middle" className='row'>
        <Col xs={12} sm={8} md={6} lg={4} xl={4}>
          <div>
            <Card symbol='♥' color='red' number={1} />
          </div>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} xl={4}>
          <div>
            <Card symbol='♥' color='red' number={1} />
          </div>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} xl={4}>
          <div>
            <Card symbol='♥' color='red' number={1} />
          </div>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} xl={4}>
          <div>
            <Card symbol='♥' color='red' number={1} />
          </div>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4} xl={4}>
          <div>
            <Card symbol='♥' color='red' number={1} />
          </div>
        </Col>
      </Row>

      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <div className="btn">
            Gerar Cartas
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App
