import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import './Items.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Items = () => {

  return (
    <>
      <Container>
        <h2 className="prodHeader">Входные двери</h2>
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
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </Container>
    </>
  )
}

export default Items