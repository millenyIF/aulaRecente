import {Container, Nav, Navbar} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css" //vai 'chamar' os arquivos 

export default function Menu(){   
return (
  <Container className={`${style.degrademenu} p-2 rounded-2 text-light`}>
    <Navbar expand="sm"  data-bs-theme="dark" >
        <Navbar.Brand href="/">6V</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lista">Lista</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Container>
  )
}