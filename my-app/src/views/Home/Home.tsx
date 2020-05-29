import React, { useState } from 'react'

import { userEducation } from '../../config/user'

import './home.css'

const Home: React.FC = (props: any) => {

    const [username, setUsername] = useState<string>('');

    function submitHandler(e: any): void{
        e.preventDefault();
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
                    <input type='text' placeholder='Your name' onChange={(e) => setUsername(e.target.value)} required /><br />
                    <input type='submit' value='Enter' />
                </form>
            </div>
        </div>
    )
}

export default Home
