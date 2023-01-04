        import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
        import '../styles/NavBar.css'
        function SearchBar() {
          return (
            <Navbar   expand="lg">
              <Container fluid>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                  <Form className="d-flex izquierda">
                    <Form.Control
                      type="search"
                      placeholder="Busca tu producto"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="warning">Buscar</Button>
                  </Form>
                  <Form className="d-flex derecha">
                    <Form.Control
                      type="search"
                      placeholder="Filtra por Categoria
                      "
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="warning">Buscar</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

export default SearchBar;