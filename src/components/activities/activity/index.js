import React from 'react';
import { connect } from 'react-redux';
import Wrapper from 'components/highlight/Wrapper';
import Activity from './Activity';

class Container extends React.Component {

    render() {
        return (
            <Wrapper {...this.props}>
                <Activity {...this.props} />
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: (payload) => dispatch({
            type: 'EDIT_ACTIVITY',
            payload,
        })
    }
}

export default connect(null, mapDispatchToProps)(Container);