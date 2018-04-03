import React from 'react';
import Activity from './activity/Activity';
import EditActivity from './activity/edit/Activity';

class Activities extends React.Component {

    state = { edit: {} }

    onClick = (edit) => {
        this.setState({
            edit,
        })
    }

    render() {
        return this.props.list.map(item => {
            return (
                (this.state.edit.id === item.id) ?
                <EditActivity
                    onClick={this.onClick}
                    key={`act-${item.id}`}
                    {...item}
                /> :
                <Activity
                    onClick={this.onClick}
                    key={`act-${item.id}`}
                    {...item}
                />
            )
          })
    }
}

export default Activities;