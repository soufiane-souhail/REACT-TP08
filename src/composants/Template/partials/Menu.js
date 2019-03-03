import React from 'react'
//import {Link} from 'react-router-dom'
import "./Menu.css"
import { Navbar,Nav } from 'react-bootstrap';

const Menu =(props) =>(
    
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse  id="basic-navbar-nav" navbar>
      <Nav className="ml-auto" navbar>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/articles">Liste des Articles</Nav.Link>
        <Nav.Link href="/a-propos-de-nous">Qui Somme nous</Nav.Link>
        <Nav.Link href="/nos-offres">Nos Offres</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

)
export default Menu;