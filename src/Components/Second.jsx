import { useNavigate } from "react-router"

const Second = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>About Pages</h1>
        <button onClick={() => navigate('/')}>Home</button>
        </>
    )
}

export default Second