import { useEffect, useState } from 'react'

function App() {
    const [message, setMessage] = useState()

    useEffect(() => {
        fetch('/api/sign-in', { method: 'GET' })
            .then((response) => response.json())
            .then((response) => setMessage(response.message))
    }, [])

    return <div>Response: {message}</div>
}

export default App
