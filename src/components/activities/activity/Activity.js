import React from 'react';
import PropTypes from 'prop-types';

class Activity extends React.Component {

    static contextTypes = {
        onClick: PropTypes.func,
    }

    onClick = () => {
        this.context.onClick(this.props);
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