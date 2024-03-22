import { SvgIcon } from 'components/icons/SvgIcon';
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { Header, Logo, Nav } from './SharedLayout.styled';


function SharedLayout() {
  return (
    <>
      <Header>
        <Logo>
          <SvgIcon
            id="fullyIntegrated"
            style={{ fill: '#101828', width: 40, height: 40 }}
          />
          <p>Campervan</p>
        </Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
}

export default SharedLayout;