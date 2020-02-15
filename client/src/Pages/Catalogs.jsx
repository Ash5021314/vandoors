import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import doors from '../interiorDoors'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

const Catalogs = () => {
  const [door, setDoors] = useState({
    title: 'title',
    frontImage: '',
    backImage: '',
    price: 123,
    description: 'description',
  })
  const [show, setShow] = useState(false)
  useEffect(() => {
    setDoors(doors)
  }, [])
  return (
    <>
      <Modal show={show} onHide={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>{door.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        </Modal.Body>
      </Modal>
      <Container>
        <h2 className="headTop">Каталог</h2>
        <CardDeck>
          {!door.length ? <h2>Loading...</h2> : (
            <Row>
              {
                door.reverse().map((res, index) => {
                  return (<Col xs={6} md={3} key={index} onClick={() => {
                      setDoors({
                        frontImage: res.frontImage,
                        title: res.title,
                        backImage: res.backImage,
                        price: res.price,
                        description: res.description,
                      })
                      setShow(!show)
                    }}>
                      <Card className="mb-5">
                        <div className="flip-box">
                          <div className="flip-box-inner">
                            <div className="flip-box-front">
                              <Card.Img variant="top" src={res.frontImage}
                                        style={{height: '100%'}}/>
                            </div>
                            <div className="flip-box-back">
                              <Card.Img variant="top" src={res.backImage}
                                        style={{height: '100%'}}/>
                            </div>
                          </div>
                        </div>
                        <Card.Body className="alignCenter">
                          <Card.Title>{res.title}</Card.Title>
                          <Card.Text>
                            {res.description.substring(0, 100) + '․․․'}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <div className="text-muted alignCenter ">{res.price} <span>р.</span></div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          )}
        </CardDeck>
      </Container>
    </>
  )
}

export default Catalogs