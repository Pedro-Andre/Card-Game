// import { useState } from 'react'
import './components/Card.css'
import { CardsWrapper } from './components/CardsWrapper';
import { Row, Col } from 'antd';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='card-container'>

      <Row justify="center" align="middle" className='row'>

        <Col>
          <CardsWrapper cardsNumber={5} />
        </Col>

        <Col xs={24} sm={24} md={12} lg={16} xl={8}>
          <div className="btn">Gerar Cartas</div>
        </Col>

      </Row>

    </div>
  )
}

export default App
