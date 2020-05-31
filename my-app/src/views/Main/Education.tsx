import React from 'react';

import { useSelector } from 'react-redux';

import Header from '../../components/Education/Header';
import Body from '../../components/Education/Body';

export interface stateObject {
    username: string
}

const Education: React.FC = (props: any) => {

    const username: string = useSelector((state: stateObject): string => { return state.username });

    if(username===""){
        props.history.push('/home');
    }

    return (
        <section>
            <Header />
            <Body />
        </section>
    )
}

export default Education