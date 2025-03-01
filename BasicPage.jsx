import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";  

import{Container, Navbar, Nav, Button} from 'react-bootstrap';


function BasicPage(){
    return(
        <div>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href="#">Welcome to my Bootstrap Page</Navbar.Brand>
                    <Nav className='auto'>
                        <Nav.Link href='#'>Home</Nav.Link>
                        <Nav.Link href='#'>About</Nav.Link>
                        <Nav.Link href='#'>Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className='mt-5 text-center'>
            <h1>Welcome to my Page</h1>
            <p>This is a basic page using React Bootstrap</p>
            <Button variant='primary'>Click Me</Button>
           </Container>
        </div>
    )
}

export default BasicPage