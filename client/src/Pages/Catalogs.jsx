import React, {useEffect, useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import initDoors from '../interiorDoors'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'


const Catalogs = () => {
  const [doors, setDoors] = useState([])
  const [selectedDoor, setSelectedDoor] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    setDoors(initDoors)
  }, [])

  return (
    <>
      <Modal show={show} onHide={setShow}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDoor.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          title: {selectedDoor.title} <br/>
          frontImage: {selectedDoor.frontImage} <br/>
          backImage: {selectedDoor.backImage} <br/>
          description: {selectedDoor.description} <br/>
          price: {selectedDoor.price} <br/>

        </Modal.Body>
      </Modal>
      <Container>
        <h2 className="headTop">Каталог</h2>
        <CardDeck>
          {!doors.length ? <h2>Loading...</h2> : (
            <Row>
              {
                doors.reverse().map((res, index) => {
                  return (<Col xs={6} md={3} key={index} onClick={() => {
                      setSelectedDoor(res)
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