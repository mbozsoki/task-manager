import { EyeIcon, EyeOffIcon, LockClosedIcon } from '@heroicons/react/solid'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'
import InputGroup from '../shared/components/molecules/InputGroup/InputGroup'

export default {
    title: 'Input group',
    component: InputGroup,
} as ComponentMeta<typeof InputGroup>

const InputTemplate: ComponentStory<typeof InputGroup> = ({
    placeholder,
    value,
}: any) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    return (
        <InputGroup
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            value={value}
            prefixIcon={<LockClosedIcon />}
            suffixIcon={showPassword ? <EyeOffIcon /> : <EyeIcon />}
            onSuffixIconClick={() => setShowPassword(!showPassword)}
        />
    )
}

export const PasswordInput = InputTemplate.bind({})
PasswordInput.args = {
    placeholder: 'This is a sample placeholder',
    value: 'Password12345',
}
