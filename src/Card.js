import { useState } from 'react';
import './Card.css';



const Card = ({number, cardPassword, text}) => {

    const [rotate, setRotate] = useState(false)
    const [isCorrect, setIsCorrect] = useState(true)
    const [password, setPassword] = useState('')

    const rotateCard = () => {
        if(password === cardPassword){
            setRotate(true)
            setIsCorrect(true)
            setPassword('')
        }
        else{
            setIsCorrect(false)
        }
    }

    const handlePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div className='maincontainer'>

            <div className="thecard" style={{transform: rotate ? 'rotateY(180deg)' : null}} >

                <div className="thefront cardbody">

                    <h2>#{number}</h2>
                    <input type='text' name='contraseña' value={password} onChange={handlePassword}/>

                    <button onClick={rotateCard}>Flip</button>
                    {isCorrect ? null : <p className='error-message'>Contraseña incorrecta</p>}


                </div>

                <div className="theback cardbody" onClick={() => setRotate(false)}>
                    <h3>Porque...</h3> 
                    <p>{text}</p>
                </div>
            </div>
        </div>

    )

}


export default Card