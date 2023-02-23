import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
function NavBar2() {
  let expand='xl'
  return (
   <div   >
     <Navbar key={expand}   expand={expand} className="mb-3 text-dark">
          <Container fluid  >
            <Navbar.Brand href="#">SUB COLLECTION</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"  
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Top Social
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-dark "    >
                  <Nav.Link    to="/">Home</Nav.Link>
                  <Nav.Link  to="/account">Account</Nav.Link>
                  {/* <Nav.Link as={NavLink} to="/Order">Order</Nav.Link> */}
                  
                  <Nav.Link  to="/Login">Login</Nav.Link>
                  <Nav.Link  to="/Signup">Signup</Nav.Link>
                   <Nav.Link  to='/Login'  >Logout</Nav.Link>
              
                  {/* <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   </div>
  );
}

export default NavBar2;