import styled from 'styled-components'

const DefaultButton = styled.button`
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
`

export const PrimaryButton = styled(DefaultButton)`
    background-color: #ab53db;
    color: #f3f2f7;
    transition: ease 200ms background-color;

    &:hover {
        background-color: #bd78e2;
    }
`

export const SecondaryButton = styled(DefaultButton)`
    background-color: #ab53db;
    color: #f3f2f7;
    transition: ease 200ms background-color;

    &:hover {
        background-color: #bd78e2;
    }
`
