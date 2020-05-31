import React, { useState } from 'react'

import { useSelector } from 'react-redux';

import { stateObject } from '../../views/Main/Education';

import './css/centerpanel.css'

function CenterPanel() {

    const username: string = useSelector((state: stateObject): string => { return state.username });

    const institutes = useSelector((state: any): Array<Object> => {
        if (username in state){
            console.log(state[username]);
            return state[username];
        }
        return [];
    });

    return (
        <section className='centerSection'>
            This is center panel for {username}<br />
            <div>
                {institutes.map((i: any, index: number) => {
                    return <div key={index}>
                        {i.name}
                    </div>
                })}
            </div>
            
        </section>
    )
}

export default CenterPanel
