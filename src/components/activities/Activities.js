import React from 'react';
import Activity from './activity';
import EditActivity from './activity/edit';

class Activities extends React.Component {

    render() {

        const list = this.props.list.map(item => (
            (this.props.edit.id === item.id) ? 
                <EditActivity
                    key={`act-${item.id}`}
                    {...item}
                /> :
                <Activity
                    key={`act-${item.id}`}
                    {...item}
                />
        ));

        return list;
    }
}

export default Activities;