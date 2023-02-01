import styled from 'styled-components';

const Form = styled.form`
    padding: 1rem 2rem;
    color: #a68;
    font-size: 1.2rem;
    max-width: 500px;
    
    fieldset {
        display: grid;
        grid-template-columns: 120px auto;
        align-items: center;
        gap: 10px;
        border: none;
        margin-bottom: 2rem;
    }

    input, select {
        min-width: 100px;
        border: 1px solid #a68;
        border-radius: 0.25rem;
        padding: 0.75rem;
        color: #686;
        font-size: 1rem;
    }

    p {
        width: 80vw;
        font-size: 1rem;
    }

    .error {
        color: red;
    }
`;

export default Form;
