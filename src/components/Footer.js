import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #ded;
    position: fixed;
    bottom: 0;
    width: 100vw;
    box-shadow: 0 0 8px #a68;

    p {
        color: #a68;
        font-size: 1rem;
        margin: 1.5rem;
        text-align: center;
    }
`;

const Footer = () => (
    <StyledFooter>
        <p>Scandiweb Test assignment</p>
    </StyledFooter>
);

export default Footer;
