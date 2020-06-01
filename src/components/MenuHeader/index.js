import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Wrapper, MenuLink, Logout, Name } from './styled';

const Menu = () => {
  const [showModal, setShowModal] = useState(false);
  const { firstName, lastName } = useSelector((state) => state.user);

   const handlerClick = () => {
    localStorage.removeItem('token');
    window.location.reload()
  };

  return (
    <Wrapper onClick={() => setShowModal(!showModal)}>
      Menu
      <Name>{firstName} {lastName}</Name>
      {showModal ? (
        <MenuLink>
          <Logout onClick={handlerClick}>
            Logout
          </Logout>
          <Link to="profile">
            Profile
          </Link>
        </MenuLink>
        ) : null}
    </Wrapper>
  );
};

export default Menu;