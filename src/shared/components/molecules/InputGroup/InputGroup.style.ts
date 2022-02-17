import styled from 'styled-components'

const IconContainer = styled.div`
    position: absolute;
    top: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
`

export const Container = styled.div`
    position: relative;
`

export const PrefixIcon = styled(IconContainer)`
    left: 1rem;
`

export const SuffixIcon = styled(IconContainer)`
    right: 1rem;
    cursor: pointer;
`
