import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import '../styles/NavBar.css'
import {LockOutlined} from '@ant-design/icons';

function NavBar() {

  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" href="#inicio">Inicio</Nav.Link>
            <Nav.Link to="/components/Nosotros" href="#nosotros">Nosotros</Nav.Link>
          
            <NavDropdown  href="#productos" title="Productos">
              <NavDropdown.Item className="drop-item" href="#action/3.1">Barredoras</NavDropdown.Item>
              <NavDropdown.Item className="drop-item" href="#action/3.2">Lavadoras</NavDropdown.Item>
              <NavDropdown.Item className="drop-item" href="#action/3.3">Excavadoras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="drop-item" href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav> 
              <Nav.Link className="login" href="#login"><LockOutlined className="candado"/>Iniciar Sesión</Nav.Link>
              <Nav.Link className="login" href="#registro">Registrarse</Nav.Link>
              </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
