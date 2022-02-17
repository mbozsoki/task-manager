import { PlusIcon } from '@heroicons/react/solid'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
    PrimaryButton,
    SecondaryButton,
    TextButton,
} from '../shared/components/atoms/buttons.style'

export default {
    title: 'Button',
    component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>

const PrimaryButtonTemplate: ComponentStory<typeof PrimaryButton> = ({
    label,
    disabled,
    icon,
}: any) => (
    <PrimaryButton disabled={disabled}>
        {icon && <PlusIcon />}
        {label}
    </PrimaryButton>
)

const SecondaryButtonTemplate: ComponentStory<typeof PrimaryButton> = ({
    label,
    disabled,
    icon,
}: any) => (
    <SecondaryButton disabled={disabled}>
        {icon && <PlusIcon />}
        {label}
    </SecondaryButton>
)

const TextButtonTemplate: ComponentStory<typeof PrimaryButton> = ({
    label,
}: any) => <TextButton>{label}</TextButton>

export const Primary = PrimaryButtonTemplate.bind({})
Primary.args = {
    label: 'New task',
    disabled: false,
    icon: false,
}

export const Secondary = SecondaryButtonTemplate.bind({})
Secondary.args = {
    label: 'Back',
    disabled: false,
    icon: false,
}

export const Text = TextButtonTemplate.bind({})
Text.args = {
    label: 'See more...',
}
