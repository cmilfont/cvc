import React from 'react';

const Activity = (props) => {

    const onClick = () => {
        props.onClick(props);
    };

    return (
        <div>
            {props.description}
            <button onClick={onClick}>Editar</button>
        </div>
    );

};

export default Activity;