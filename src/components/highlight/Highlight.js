import React from 'react';
import PropTypes from 'prop-types';

class Highlight extends React.Component {

    static childContextTypes = {
        onSelectedText: PropTypes.func,
    }

    getChildContext() {
        return {
            onSelectedText: this.onSelectedText,
        }
    }

    onSelectedText = (id, text) => {
        this.props.onSelect(id, text);
    }

    componentDidMount() {
        document.onmouseup = this.onSelectedText;
        document.onkeyup = this.onSelectedText;
    }

    render() {
        return this.props.children;
    }
}

export default Highlight;