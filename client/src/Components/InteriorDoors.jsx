import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const InteriorDoors = () => {
  let str = 'С утеплителем из пенополистирола высокой плотности! Внутренняя панель для двери Бастион цвета медный антик.';
  let newStr = str.substring(0,150) + "․․․"
  return (
    <>
      <h2 className="prodHeader">Межкомнатные двери</h2>
      <CardDeck>
        <Row>
          <Col xs={6} md={3}>
            <Card>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <Card.Img variant="top" src="/images/product/front/door.jpg"
                              style={{height: '100%'}}/>
                  </div>
                  <div className="flip-box-back">
                    <Card.Img variant="top" src="/images/product/back/door.jpg"
                              style={{height: '100%'}}/>
                  </div>
                </div>
              </div>
              <Card.Body className="alignCenter">
                <Card.Title>Входная дверь Бастион</Card.Title>
                <Card.Text>
                  {newStr}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="text-muted alignCenter ">7900 <span>р.</span></div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <Card.Img variant="top" src="/images/product/front/door1.jpg"
                              style={{height: '100%'}}/>
                  </div>
                  <div className="flip-box-back">
                    <Card.Img variant="top" src="/images/product/back/door1.jpg"
                              style={{height: '100%'}}/>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title className='alignCenter'>Входная дверь Цитадель 3М</Card.Title>
                <Card.Text className='alignCenter'>
                  {newStr}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="text-muted alignCenter">21700 <span>р.</span></div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <Card.Img variant="top" src="/images/product/front/door1.jpg"
                              style={{height: '100%'}}/>
                  </div>
                  <div className="flip-box-back">
                    <Card.Img variant="top" src="/images/product/back/door2.jpg"
                              style={{height: '100%'}}/>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title  className='alignCenter'>Входная дверь Соломон Гранд</Card.Title>
                <Card.Text  className='alignCenter'>
                  {newStr}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="text-muted alignCenter">1950 <span>р.</span></div>
              </Card.Footer>
            </Card>

          </Col>
          <Col xs={6} md={3}>
            <Card>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                    <Card.Img variant="top" src="/images/product/front/door1.jpg"
                              style={{height: '100%'}}/>
                  </div>
                  <div className="flip-box-back">
                    <Card.Img variant="top" src="/images/product/back/door2.jpg"
                              style={{height: '100%'}}/>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title className='alignCenter'>Входная дверь Президент Х7</Card.Title>
                <Card.Text className='alignCenter'>
                  {newStr}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="text-muted alignCenter">2190 <span>р.</span></div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Button variant="info" className="buttonCenter">увидеть больше</Button>
      </CardDeck>
    </>
  );
};

export default InteriorDoors;