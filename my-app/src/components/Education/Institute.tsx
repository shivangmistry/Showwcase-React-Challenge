import React from 'react'

import './css/institute.css'

const Institute: React.FC = (props: any) => {

    return (
        <div className='instituteDiv' id={props.name}>
            <strong>{props.degree}, {props.field} @ {props.name}</strong>
            <br />
            
            {props.startYear} - {props.endYear}
            <br />
            
            {(props.grade) ? 
            <div>
                Grade: {props.grade}
            </div>:
            null}
            {props.description}
        </div>
    )
}

export default Institute
