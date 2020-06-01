import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { userEducation } from '../../config/user'

import { setUser } from '../../redux/action/actions'

import './css/home.css'


const Home: React.FC = (props: any) => {

    const [username, setUsername] = useState<string>('');

    const dispatch = useDispatch();

    function submitHandler(e: any): void{
        e.preventDefault();
        
        dispatch(setUser(username));
        props.history.push(userEducation(username));
    }

    return (
        <div className='mainDiv'>
            <div>
                <h2>Hi there! Welcome to your education showcase.</h2><br />
                <h4>Type your name and click 'Enter' below to begin!</h4>
                </div>
            <div>
                <form className='usernameForm' onSubmit={submitHandler} >
                    <input type='text' placeholder='Your name' onChange={(e) => setUsername(e.target.value)} required /><br /><br />
                    <button type='submit'>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Home
