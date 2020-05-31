import React from 'react'


import { useSelector } from 'react-redux';

import { stateObject } from '../../views/Main/Education';
import { EducationInstitute } from './Header'

import './css/sidepanel.css'

const SidePanel: React.FC = () => {

    const username: string = useSelector((state: stateObject): string => { return state.username });

    const institutes = useSelector((state: any): Array<EducationInstitute> => {
        if (username in state)
            return state[username];
        return [];
    });

    return (
        <aside className='asideDiv'>
            <ul>
                {institutes.map((i, index) => {
                    return <li key={index}>{i.name}</li>
                })}
            </ul>
        </aside>
    )
}

export default SidePanel
