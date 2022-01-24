import styled from 'styled-components'

interface Props {
    disabled?: boolean
}

const DefaultButton = styled.button`
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 1rem;
    cursor: pointer;

    > svg {
        height: 18px;
        width: 18px;
        padding-right: 8px;
    }
`

export const PrimaryButton = styled(DefaultButton)`
    ${({ disabled }: Props) =>
        disabled
            ? `
                color: var(--disabled-color);
                background-color: var(--disabled-bg-color);
                cursor: auto;
            `
            : `
                color: var(--primary-color);
                background-color: var(--primary-bg-color);

                &:hover {
                    background-color: var(--primary-bg-hover-color);
                }
            
                &:active {
                    background-color: var(--primary-bg-active-color);
                }
    `}

    transition: ease 100ms background-color;
`

export const SecondaryButton = styled(DefaultButton)`
    ${({ disabled }: Props) =>
        disabled
            ? `
                color: var(--disabled-color);
                background-color: var(--disabled-bg-color);
                cursor: auto;
            `
            : `
                color: var(--secondary-color);
                background-color: var(--secondary-bg-color);

                &:hover {
                    background-color: var(--secondary-bg-hover-color);
                }
            
                &:active {
                    background-color: var(--secondary-bg-active-color);
                }
    `}

    transition: ease 100ms background-color;
`

export const TextButton = styled(DefaultButton)`
    background-color: transparent;
    color: var(--primary-bg-color);
    transition: ease 100ms color;

    &:hover {
        color: var(--primary-bg-hover-color);
    }

    &:active {
        color: var(--primary-bg-active-color);
    }
`
