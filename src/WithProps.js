import React from 'react';
import PropTypes from 'prop-types';

class WithProps extends React.Component {
    render() {
        let txt = this.props.txt;
        // return <h1>{this.props.txt}</h1>
        return <h1>{txt}</h1>
    }
}

WithProps.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

WithProps.defaultProps = {
  txt: "this is the default text"
};

export default WithProps;