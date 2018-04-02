import React from 'react';

class Activity extends React.Component {

    state = {
        description: ''
    }

    componentWillMount() {
        const { description, id } = this.props;
        this.setState({
            id,
            description,
        });
    }

    onChange = ({ target: { value: description } }) => {
        this.setState({
            ...this.state,
            description,
        });
    }

    save = () => {
        this.props.save(this.state);
    }

    render() {

        const { description } = this.state;

        return (
            <div>
                <input onChange={this.onChange} type="text" value={description} />
                <button>Cancel</button>
                <button onClick={this.save}>Save</button>
            </div>
        )
    }
}

export default Activity;