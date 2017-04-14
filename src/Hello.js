import React from 'react';

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 18
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.age <= 20;
    }

    changeAge() {
        this.setState({age: this.state.age + 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.age}</h1>
                <button onClick={() => this.changeAge()}>Age++</button>
                <h2>Hello {this.props.name}</h2>
            </div>);
    }
}

export default HelloMessage;
