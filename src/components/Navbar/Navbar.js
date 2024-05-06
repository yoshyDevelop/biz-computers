import React, { useState } from 'react';
import {
  Link,
  NavLink,
} from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBInputGroup,
  MDBBadge,
} from 'mdb-react-ui-kit';
import  logo  from "../../assets/logo192.png";
import './styles.css'
export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer breakpoint="sm">
        <MDBNavbarBrand>
          <NavLink to={'/'}>
            <img
                src={logo ? logo : 'https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png'}
                height='60'
                alt=''
                loading='lazy'
              />
          </NavLink>
          </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic} className='w-100'>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to={'products'} activeClassName="selected">
                  Productos
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to={'blog'}>
                  Blog
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to={'about'}>
                  Sobre Nosostros
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <NavLink to={'contact'}>
                  Contact
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            
          <div className="ms-auto p-2">
          </div>
              <MDBNavbarItem className="p-2">
                  <MDBNavbarLink>
                    <NavLink to={'cart'}>   
                      <span>
                        <MDBIcon fas icon='shopping-cart'></MDBIcon>
                      </span>
                      <MDBBadge pill color='danger'>!</MDBBadge>
                    </NavLink>
                  </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem className="p-2">
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                      <MDBIcon fas icon='user'></MDBIcon>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <NavLink to={'/signup'}>
                      <MDBDropdownItem link>
                          Login
                      </MDBDropdownItem>
                      </NavLink>
                      <NavLink to={'/register'}>
                      <MDBDropdownItem link>
                          Registrarse
                      </MDBDropdownItem>
                      </NavLink>
            
                    </MDBDropdownMenu>
                  </MDBDropdown>
              </MDBNavbarItem>
          
          </MDBNavbarNav>
        </MDBCollapse>
        
      </MDBContainer>
    </MDBNavbar>
  );
}