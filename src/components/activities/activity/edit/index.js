import React from 'react';
import PropTypes from 'prop-types';
import Activity from './Activity';

class Wrapper extends React.Component {

    static contextTypes = {
        onClick: PropTypes.func,
        onSave: PropTypes.func,
    }

    render() {
        return (
            <Activity {...this.props} {...this.context}  />
        )
    }
}

export default Wrapper;