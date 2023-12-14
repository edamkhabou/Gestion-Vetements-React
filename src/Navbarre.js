import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Navbarre() {
  return (
    
        
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Gestion des vetements</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/*<Nav.Link as={Link}to="/Articles">List des Articles</Nav.Link>
                  <Nav.Link as={Link}to="/Categories">List des Categories</Nav.Link>
                  <Nav.Link as={Link}to="/SousCategories">List des SousCategories</Nav.Link>*/}
                  
                  <NavDropdown title="Vetements" id="Article">
                    <NavDropdown.Item as={Link}to="/Articles">List des vetements</NavDropdown.Item>
                   
                    </NavDropdown>

                    <NavDropdown title="Categories" id="Categories">
                    <NavDropdown.Item as={Link}to="/Categories">List des Categories</NavDropdown.Item>
                    
                    </NavDropdown>

                    <NavDropdown title="Marque" id="SousCategories">
                    <NavDropdown.Item as={Link}to="/Marque">List des Marque</NavDropdown.Item>
                   
                    </NavDropdown>

                    
                  {/*<Nav.Link as={Link}to="/Editarticle">Edit des Articles</Nav.Link>
                  <Nav.Link as={Link}to="/Editcategories">Edit des Categories</Nav.Link>
<Nav.Link as={Link}to="/Editsouscategories">Edit des SousCategories</Nav.Link>*/}

                  {/*<Nav.Link as={Link}to="/Insertarticle.js">Insertion des Articles</Nav.Link>
                  <Nav.Link as={Link}to="/Insertcategories">Insertion deds Categories</Nav.Link>
<Nav.Link as={Link}to="/Insertsouscategories">Insertion des Sous Categories</Nav.Link>*/}

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
  )
  }
