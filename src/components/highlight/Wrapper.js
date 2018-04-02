import React from 'react';
import PropTypes from 'prop-types';

export default class Wrapper extends React.Component {

    static contextTypes = {
        onSelectedText: PropTypes.func,
    }

    componentDidMount() {
        this.el.onmouseup = this.onSelect;
    }onSelectedText

    onSelect = () => {
        const userSelection = window.getSelection()
        const text = userSelection.toString();
       // console.warn(userSelection, text, this.props);
        this.context.onSelectedText(this.props.id, text);
    }

    render() {
        const { children, id, description } = this.props;

        return (
            <div ref={el => (this.el=el)}>
                {children}
            </div>
        )
    }


}