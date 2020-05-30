import React, { useState } from 'react';

import Header from '../../components/Education/Header';
import Body from '../../components/Education/Body';

const Education: React.FC = (props: any) => {

    const [username] = useState<string>(props.match.params);
    console.log(username);

    return (
        <section>
            <Header {...username} />
            <Body />
        </section>
    )
}

export default Education