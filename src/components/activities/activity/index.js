import React from 'react';
import Wrapper from 'components/highlight/Wrapper';
import Activity from './Activity';

export default class Container extends React.Component {

    render() {
        return (
            <Wrapper {...this.props}>
                <Activity {...this.props} />
            </Wrapper>
        )
    }
}