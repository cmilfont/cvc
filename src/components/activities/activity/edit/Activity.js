import React from 'react';

class Activity extends React.Component {

    onClick = () => {
        this.props.onClick({});
    }

    render() {
        return (
            <div>
                <input value={this.props.description} type="text" />
                <button onClick={this.onClick}>Cancelar</button>
            </div>
        )
    }
}

export default Activity;