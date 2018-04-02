import React from 'react';

export class Activity extends React.Component {

    onClick = (event) => {
        this.props.onEdit(this.props);
    }

    render() {
        const { description } = this.props;
        return (
            <div>
                {description}
                <button onClick={this.onClick}>Edit</button>
            </div>
        )
    }
}


export default Activity;