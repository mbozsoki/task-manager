import { addDecorator } from '@storybook/react'
import GlobalStyle from '../src/App/globalStyles'
import StyleReset from '../src/App/styleReset'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

addDecorator((story) => (
    <>
        <StyleReset />
        <GlobalStyle />
        {story()}
    </>
))
