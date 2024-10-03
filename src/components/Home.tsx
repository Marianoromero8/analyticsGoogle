import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>HOLA RUTA 1</h1>
            <button onClick={() => { navigate('/page2') }}>Page 2</button>
        </div>
    )
}

export default Home;