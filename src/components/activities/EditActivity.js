import React from 'react';

class Activity extends React.Component {

    render() {

        const { description } = this.props;

        return (
            <div>
                <input type="text" value={description} />
                <button>Cancel</button>
            </div>
        )
    }
}

export default Activity;