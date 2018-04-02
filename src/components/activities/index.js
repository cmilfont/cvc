import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Highlight from 'components/highlight/Highlight';
import Activities from './Activities';

class Container extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ACTIVITIES'
        })
    }

  onSelect = (id, text) => {
    console.warn('Vou fazer o Ajax', id, text);
  }

    render() {
        const { edit, list } = this.props;
        return (
            <Highlight onSelect={this.onSelect}>
                <Activities edit={edit} list={list} />
            </Highlight>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.activities,
        edit: state.edit,
    }
}

export default withRouter(connect(mapStateToProps)(Container))