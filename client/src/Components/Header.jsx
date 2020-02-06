import React from 'react'
import {Navbar} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './Header.css'
const Header = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="md" className="backGround" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    Vandoors
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-auto">
                  <Nav.Link href="/">О Компании</Nav.Link>
                  <Nav.Link href="/">Бренди</Nav.Link>
                  <Nav.Link href="/">Наши преимущества</Nav.Link>
                  <Nav.Link href="/">Каталог</Nav.Link>
                  <Nav.Link href="/">Контакты</Nav.Link>
                </Nav>
                <Button className="custom-bg">Вызвать замерщика</Button>
              </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header