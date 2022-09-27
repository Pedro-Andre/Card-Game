// import { useState } from 'react'
import './components/Card.css'
import { CardsWrapper } from './components/CardsWrapper';
import { Row, Col } from 'antd';
import React from "react"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='card-container'>

      <Row justify="center" align="middle" className='row'>

        <Col>
          <CardsWrapper cardsNumber={10} />
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <button className="btn" onClick={() => window.location.reload()}>Gerar Cartas</button>
        </Col>

      </Row>

    </div>
  )
}

export default App
