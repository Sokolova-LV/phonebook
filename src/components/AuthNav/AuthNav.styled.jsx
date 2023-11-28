import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Div = styled.div`
    background-color: #ffffff; 
    padding: 10px;
    display: flex;
    justify-content: space-around;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333333; 
    font-weight: bold;
    font-size: 20px;
    transition: color 0.3s ease;

    :hover {
        color: #9b59b6;
    }

    @media screen (min-width: 768px) {
        font-size: 30px;
    };

    @media screen (min-width: 1280px) {
        font-size: 36px;
    };
`;