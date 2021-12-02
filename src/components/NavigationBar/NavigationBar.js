import React from 'react';
import { Navbar, Container, Nav,Form } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
const NavigationBar = ({
   setSearchCondition,
   selectRating,
   setSelectRating,
   }) => {
    return (
       
  <Navbar bg="dark" variant="dark" style={{ marginBottom: "2rem"}}>
  <Container>
  <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Movies</Nav.Link>
    <Nav.Link href="#pricing">Subscription</Nav.Link>
  </Nav>
  <Rating onClick={(x) => setSelectRating(x)} ratingValue={selectRating} />
  <Form.Control
    type="text" 
    placeholder="Search movie"
    style={{width: "30%"}} 
    onChange={(e) => setSearchCondition(e.target.value)}
    />
  
  </Container>
</Navbar>
    );
};

export default NavigationBar;


