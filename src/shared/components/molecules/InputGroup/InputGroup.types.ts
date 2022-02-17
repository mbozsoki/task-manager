import { ReactElement } from 'react'

export type Props = {
    type: string
    placeholder: string
    value: string
    prefixIcon?: ReactElement<void, string>
    suffixIcon?: ReactElement<void, string>
    onSuffixIconClick?: () => void
}
