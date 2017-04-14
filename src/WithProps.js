import React from 'react';

class WithProps extends React.Component {
    render() {
        // let txt = this.props.txt;
        return <h1>{this.props.txt}</h1>
        // return <h1>{txt}</h1>
    }
}

export default WithProps;