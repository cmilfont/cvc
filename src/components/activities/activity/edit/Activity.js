import React from 'react';

class Activity extends React.Component {

    state = {
        description: '',
    }

    onClick = () => {
        this.props.onClick({});
    }

    onChange = ({ target: { value: description} }) => {
        this.setState({
            ...this.state,
            description,
        })
    }

    componentWillMount() {
        this.setState(this.props);
    }

    render() {
        return (
            <div>
                <input onChange={this.onChange} value={this.state.description} type="text" />
                <button onClick={this.onClick}>Cancelar</button>
            </div>
        )
    }
}

export default Activity;