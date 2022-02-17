import { FC } from 'react'
import Input from '../../atoms/input.style'
import { Container, PrefixIcon, SuffixIcon } from './InputGroup.style'
import { Props } from './InputGroup.types'

const InputGroup: FC<Props> = ({
    type,
    placeholder = '',
    value = '',
    prefixIcon,
    suffixIcon,
    onSuffixIconClick,
}) => (
    <Container>
        {prefixIcon && <PrefixIcon>{prefixIcon}</PrefixIcon>}
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            withPrefixIcon={!!prefixIcon}
            withSuffixIcon={!!suffixIcon}
        />
        {suffixIcon && (
            <SuffixIcon onClick={onSuffixIconClick}>{suffixIcon}</SuffixIcon>
        )}
    </Container>
)

export default InputGroup
