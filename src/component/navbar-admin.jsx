import { useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { MdKeyboardArrowDown } from 'react-icons/md'

function NavbarFun() {

  const navigate = useNavigate()
  const location = useLocation()
  const logout = () => {
    auth.signOut().then((e) => {
      window.localStorage.removeItem("token")
      navigate("/admin", { replace: true })
    })
  } 

  const checkAuth = () => {
    var ca = window.localStorage.getItem("token") 
    ca == "null" && logout()
  }

  useEffect(() => {
    checkAuth()
  }, [])


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
            <Nav.Link href="/admin/user" active={location.pathname === "/admin/user"}>User's</Nav.Link>
            <Nav.Link href="/admin/query" active={location.pathname === "/admin/query"}>Query</Nav.Link>
            <Nav.Link href="/admin/claim" active={location.pathname === "/admin/claim"}>Claim</Nav.Link>
          </Nav>
          <Button onClick={logout} variant='outline-primary' >LogOut</Button> &ensp;&ensp;
          <Image
            roundedCircle
            width={40}
            height={40}
            src="https://media.licdn.com/dms/image/C4D03AQGcWWGWoNj3kQ/profile-displayphoto-shrink_400_400/0/1661496091183?e=1677110400&v=beta&t=o1eNUQqVdl2_9c9curWo5_Ru6osDotjqFlKOLo9XJWE"
          />
          <font size="4" className='p-2'>Mohd Kamleen <MdKeyboardArrowDown /> </font> 

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFun;