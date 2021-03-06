import { FC, MutableRefObject, useRef, useState } from 'react'
import { PrimaryButton } from '../shared/components/atoms/buttons.style'
import { Column } from '../shared/components/atoms/positional-blocks.style'
import apiClient from '../shared/utils/http-common'

type SignInResponse = { secret: string }

const Login: FC = () => {
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
