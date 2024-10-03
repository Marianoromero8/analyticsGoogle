import { useNavigate } from 'react-router-dom'

const Page2 = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>WELCOME TO PAGE 2</h1>
            <button onClick={() => { navigate('/') }}>Home</button>
        </div>
    )
}

export default Page2;