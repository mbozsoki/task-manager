import styled from 'styled-components'

interface Props {
    withPrefixIcon?: boolean
    withSuffixIcon?: boolean
}

const Input = styled.input`
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid var(--border-color);
    background-color: #ffffff;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    ${({ withPrefixIcon }: Props) =>
        `padding-left: ${withPrefixIcon ? 3 : 1.5}rem;`}

    ${({ withSuffixIcon }: Props) =>
        `padding-right: ${withSuffixIcon ? 3 : 1.5}rem;`}

    &::placeholder {
        color: var(--placeholder-color);
    }

    &:focus {
        outline: none;
    }
`

export default Input
