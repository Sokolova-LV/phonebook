import styled from "@emotion/styled";

export const Div = styled.div`
    margin: 100px auto;
    
    @media screen (min-width: 768px) {
        margin: 150px auto;
    };

    @media screen (min-width: 1280px) {
        margin: 200px auto;
    };
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 30px;

    @media screen (min-width: 768px) {
        font-size: 40px;
    };
    
    @media screen (min-width: 1280px) {
        font-size: 60px;
    };
    
    
`;