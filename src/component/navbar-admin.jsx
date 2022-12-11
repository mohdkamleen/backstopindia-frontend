 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

function navbar() {
  return (
    <Navbar expand="lg" className='bg-dark' variant='dark'>
      <Container fluid>
        <Navbar.Brand href="/"> <font size="5" color="#0d6efd">B</font>ackstop<font size="5" color="#0d6efd">I</font>ndia</Navbar.Brand>
       
          <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
            <Nav.Link href="/admin/newUser">NewUser</Nav.Link>  
            <Nav.Link href="/admin/verifiedUser">VerifiedUser</Nav.Link>  
            <Nav.Link href="/admin/servicesUser">ServiseUser</Nav.Link>  
            <Nav.Link href="/admin/query">Query</Nav.Link>  
            <Nav.Link href="/admin/claim">Claim</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;