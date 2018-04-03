import React from 'react';
import { connect } from 'react-redux';
import Activity from './Activity';

class Container extends React.Component {

    render() {
        return (
            <Activity {...this.props} />
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        onClick: (payload) => dispatch({
            type: 'EDIT_ACTIVITY',
            payload,
        }),
        onSave: (payload) => dispatch({
            type: 'SAVE_ACTIVITY',
            payload,
        }),
    }
}

export default connect(null, mapDispatch)(Container);