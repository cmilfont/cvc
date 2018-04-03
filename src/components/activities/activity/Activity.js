import React from 'react';

class Activity extends React.Component {

    onClick = () => {
        this.props.onClick(this.props);
    }

    render() {
        return (
            <div>
                {this.props.description}
                <button onClick={this.onClick}>Editar</button>
            </div>
        )
    }
}

export default Activity;