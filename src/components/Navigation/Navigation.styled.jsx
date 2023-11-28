import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #333333; 
  padding: 10px;
`;

export const NavLink = styled(Link)`
    text-align: center;
    margin-right: 15px;
    text-decoration: none;
    color: #ffffff; 
    font-weight: bold;
    font-size: 22px;
    transition: color 0.3s ease;

    @media screen (min-width: 768px) {
        font-size: 32px;
    };

    @media screen (min-width: 1280px) {
        font-size: 38px;
    };

    :hover {
        color: #9b59b6;
    }
`;