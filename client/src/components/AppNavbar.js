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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
                <Link to ='/' className='nav-link' onClick={toggle}>All Art</Link>
              </NavItem>
              <NavItem>
                <Link to ='/top' className='nav-link' onClick={toggle}>Top Art</Link>
              </NavItem>
              <NavItem>
                <Link to='/authors' className='nav-link' onClick={toggle}>Authors</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Other
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href='https://www.twitch.tv/xqcow' target='__blank' onClick={toggle}>xQcOW</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href='https://github.com/CShatto99/MERN_Projects/tree/master/PogUArt' target='__blank' onClick={toggle}>Github</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar
