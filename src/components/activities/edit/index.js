import React from 'react';
import { connect } from 'react-redux';
import EditActivity from './EditActivity';

class Container extends React.Component {
    render() {
        return (<EditActivity {...this.props} />)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        save: (payload) => dispatch({
            type: 'SAVE_ENTITY',
            payload,
        })
    }
}
export default connect(null, mapDispatchToProps)(Container);