import { FC } from 'react'
import Login from '../Authentication/Login'
import GlobalStyle from './globalStyles'
import StyleReset from './styleReset'

const App: FC = () => (
    <>
        <StyleReset />
        <GlobalStyle />
        <Login />
    </>
)

export default App
