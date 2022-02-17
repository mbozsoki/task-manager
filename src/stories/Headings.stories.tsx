import { ComponentMeta, ComponentStory } from '@storybook/react'
import Headings from './Headings'

export default {
    title: 'Headings',
    component: Headings,
} as ComponentMeta<typeof Headings>

const InputTemplate: ComponentStory<typeof Headings> = () => <Headings />

export const Default = InputTemplate.bind({})
Default.args = {
    children: 'Heading text',
}
