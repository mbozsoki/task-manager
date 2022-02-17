import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '../shared/components/atoms/input.style'

export default {
    title: 'Input',
    component: Input,
} as ComponentMeta<typeof Input>

const InputTemplate: ComponentStory<typeof Input> = ({ placeholder }: any) => (
    <Input placeholder={placeholder} />
)

export const BaseInput = InputTemplate.bind({})
BaseInput.args = {
    placeholder: 'This is a sample placeholder',
}
