import styled from '@emotion/styled';

export const Div = styled.div`
    max-width: 300px; 
    margin: 20px auto;

    @media screen (min-width: 768px) {
        max-width: 500px;
    };

    @media screen (min-width: 1280px) {
        max-width: 600px;
    };
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    text-align: center;
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px;

    :last-child {
        border-bottom: none;
    };
`;

export const ItemName = styled.p`
    font-size: 18px;
    font-weight: bold;

    @media screen (min-width: 768px) {
        font-size: 20px;
    };

    @media screen (min-width: 1280px) {
        font-size: 20px;
    };
`;

export const ItemNumber = styled.span`
    font-weight: normal;
    margin-left: 15px;
`;

export const Btn = styled.button`
    display: block;
    background-color: #000000; 
    font-size: 16px;
    color: #ffffff; 
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    @media screen (min-width: 768px) {
        font-size: 18px;
    };

    @media screen (min-width: 1280px) {
        font-size: 20px;
    };


    :hover {
        background-color: #9b59b6;
        transition: 0.3s ease;
    }
`;