import React from 'react'
import Container from 'react-bootstrap/Container'
import './Items.css'
import IronDoors from './IronDoors'
import InteriorDoors from './InteriorDoors'
import Brends from './Brends'

const Items = () => {
  return (
    <>
      <Container>
        <IronDoors/>
        <InteriorDoors/>
      </Container>
    </>
  )
}

export default Items