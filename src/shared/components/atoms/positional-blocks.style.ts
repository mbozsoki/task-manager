import styled from 'styled-components'

interface Props {
    hAlign?: string
    vAlign?: string
    gap?: number
    mt?: number
}

export const Row = styled.div<Props>`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${({ hAlign }: Props) => hAlign};
    align-items: ${({ vAlign }: Props) => vAlign};
    gap: ${({ gap }: Props) => `${gap}rem`};
`

export const Column = styled.div<Props>`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${({ hAlign }: Props) => hAlign};
    justify-content: ${({ vAlign }: Props) => vAlign};
    gap: ${({ gap }: Props) => `${gap}rem`};
    margin-top: ${({ mt }: Props) => `${mt}rem`};
`
