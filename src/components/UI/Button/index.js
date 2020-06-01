import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  height: 40px;
  width: 80px;
  color: black;
  margin: 20px 40%;
`;

const Button = ({ children, onClick }) => {
  return (
    <StyleButton onClick={onClick}>{children}</StyleButton>
  )
};

export default Button;