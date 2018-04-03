import React from 'react';
import { connect } from 'react-redux';
import Activities from './Activities';

class Container extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ACTIVITIES',
        })
    }

    render() {
        return (
            <Activities {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        edit: state.edit || {}
    };
}

export default connect(mapStateToProps)(Container);