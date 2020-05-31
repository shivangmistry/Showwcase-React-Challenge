import React from 'react'

import { useSelector } from 'react-redux';

import { stateObject } from '../../views/Main/Education';
import { EducationInstitute } from './Header'

import Institute from './Institute';

import './css/centerpanel.css'

const CenterPanel: React.FC = () => {

    const username: string = useSelector((state: stateObject): string => { return state.username });

    const institutes = useSelector((state: any): Array<EducationInstitute> => {
        if (username in state)
            return state[username];
        return [];
    });

    return (
        <section className='centerSection'>
            <div>
                {institutes.map((i: EducationInstitute, index: number) => {
                    // return <div>{i.name}</div>
                    return <Institute key={index} {...i} />
                })}
            </div>

        </section>
    )
}

export default CenterPanel
