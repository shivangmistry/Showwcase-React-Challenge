import React from 'react'

import SidePanel from './SidePanel'
import CenterPanel from './CenterPanel'

import './css/body.css'

const Body: React.FC = () => {

    return (
        <div className='educationBody'>
            <SidePanel />
            <CenterPanel />
            <SidePanel />
        </div>
    )
}

export default Body
