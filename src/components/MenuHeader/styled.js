import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  /* position: fixed; */
  cursor: pointer;
  margin-top: 50px;
`;

export const MenuLink = styled.div`
  height: 100px;
  width: 50px; 
  background-color:  #c68a53;
  position: absolute;
  right: 0px;
  top: 54px;
  padding: 0 50px 0 50px;
  a {
    font-size: 16px;
    font-weight: normal;
  }
`;

export const Logout = styled.p`
  cursor: pointer;
`;

export const Name = styled.p`
  color: red;
  margin-top: 0px;
`;

