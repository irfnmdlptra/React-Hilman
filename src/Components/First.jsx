import {useNavigate} from 'react-router-dom'

const First = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>Home Page Route</h1>
        <button onClick={() => navigate('/about')}>Info Lebih Lanjut</button>
        </>
    )
}

export default First