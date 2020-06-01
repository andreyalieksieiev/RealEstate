import React from 'react';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';


import { Wrapper, Logo } from './styled';
import Menu from '../MenuHeader';

const Header = () => {
  const token = localStorage.getItem('token');
 
  return (
    <Wrapper>
      <Logo>
        <Link to="/">Header</Link>
      </Logo>
      {token ? <Menu /> : null}
    </Wrapper>
  );
};

export default Header;
