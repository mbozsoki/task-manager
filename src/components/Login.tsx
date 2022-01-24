import { MutableRefObject, useRef, useState } from 'react'
import apiClient from '../http-common'
import { PrimaryButton } from '../styles/buttons.style'
import { Column } from '../styles/positional-blocks.style'

type SignInResponse = { secret: string }

function Login() {
    const [token, setToken] = useState<string>('')
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>

    const signIn = async (
        email: string,
        password: string
    ): Promise<SignInResponse> => {
        const { data } = await apiClient.post<SignInResponse>('sign-in', {
            email,
            password,
        })
        return data
    }

    return !token ? (
        <Column vAlign="center" hAlign="center" gap={2} mt={2}>
            <input id="email" ref={emailRef} />
            <input id="password" type="password" ref={passwordRef} />
            <PrimaryButton
                onClick={async () => {
                    const { secret } = await signIn(
                        emailRef.current.value,
                        passwordRef.current.value
                    )
                    setToken(secret)
                }}
            >
                Login
            </PrimaryButton>
        </Column>
    ) : (
        <div>Authenticated {token}</div>
    )
}

export default Login
