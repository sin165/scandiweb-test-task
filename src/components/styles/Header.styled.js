import styled from 'styled-components';

const Header = styled.header`
    position: fixed;
    right: 0;
    left: 0;
    background-color: #ded;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px #a68;
    
    h1 {
        color: #a68;
        font-size: 2rem;
    }
`;

export default Header;
