import React from 'react';
import Activity from './activity';
import EditActivity from './edit';

class Activities extends React.Component {

    render() {

        const { list, edit } = this.props;

        return list.map(item => (
            (item.id === edit.id) ?
            <EditActivity
                key={`act-${item.id}`}
                {...item}
            /> :
            <Activity
                key={`act-${item.id}`}
                {...item}
            />
        ))
    }
}

export default Activities;