import React from 'react';
import { connect } from 'react-redux';
import Activities from './Activities';

class Container extends React.Component {

    componentDidMount() {
        this.props.fetch();
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: () => dispatch({
            type: 'FETCH_ACTIVITIES',
        }),
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Container);