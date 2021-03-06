import React from 'react';

class WithCustomType extends React.Component {
    render() {
        return <Title text="The Text"/>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>;

Title.propTypes = {
    text(props, propName) {
        if (!(propName in props)) {
            return new Error(`missing ${propName}`)
        }
        if (props[propName].length < 6) {
            return new Error(`${propName} is too short`)
        }
    }
};

export default WithCustomType;