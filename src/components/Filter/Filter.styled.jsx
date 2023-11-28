import styled from '@emotion/styled';

export const Div = styled.div`
    max-width: 300px;
    margin: 40px auto;
    background-color: #ffffff; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 

     @media screen (min-width: 768px) {
        max-width: 500px;
    };

    @media screen (min-width: 1280px) {
        max-width: 600px;
    };
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;

    @media screen (min-width: 768px) {
        font-size: 30px;
    };

    @media screen (min-width: 1280px) {
        font-size: 36px;
    };
`;

export const Input = styled.input`
    width: 100%;
    font-size: 18px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #9b59b6; 
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 10px;

    @media screen (min-width: 768px) {
        font-size: 20px;
    };

    @media screen (min-width: 1280px) {
        font-size: 20px;
    };
`;