import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from 'reactstrap'
import xqcpfp from '../img/xqcpfp.jpeg'

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar dark expand='sm'>
        <Container>
          <NavbarBrand href='/'><img className='mr-2' src={xqcpfp} alt='xqcphp' width='30px'/>PogU Art</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to ='/' className='nav-link' onClick={toggle}>Art</Link>
              </NavItem>
              <NavItem>
                <Link to='/authors' className='nav-link' onClick={toggle}>Authors</Link>
              </NavItem>
              <NavItem>
                <NavLink href='https://www.twitch.tv/xqcow' target='__blank' onClick={toggle}>xQcOW</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/CShatto99/MERN_Projects/tree/master/PogUArt' target='__blank' onClick={toggle}>Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar
