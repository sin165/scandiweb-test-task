import styled from 'styled-components';

const Products = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    color: #a68;
    font-size: 1.2rem;

    div {
        padding: 1.5rem 2rem;
        min-width: 220px;
        height: 136px;
        box-shadow: 0 0 8px #a68;
        border-radius: 0.5rem;
        background-color: white;
    }

    div p {
        text-align: center;
    }

    div input {
        accent-color: #a68;
    }
`;

export default Products;
