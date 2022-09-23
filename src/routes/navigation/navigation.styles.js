import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const Logo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export { NavigationContainer, Logo, NavLinks, NavLink };
