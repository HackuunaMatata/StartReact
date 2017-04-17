import React from 'react';

class ComponentFromArrays extends React.Component {
    constructor() {
        super();
        this.state = {items: []};
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(function (err) {
                console.log(err)
            })
            .then(response => response.json())  //Uncaught (in promise) TypeError: Cannot read property 'json' of undefined at ComponentFromArrays.js:14
            .then(({results: items}) => this.setState({items}));
    }
    filter(e) {
        this.setState({filter: e.target.value});
    }
    render() {
        let items = this.state.items;
        if(this.state.filter) {
            items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
        }
        return (
            <div>
                <input type="text" onChange={this.filter.bind(this)}/>
                {items.map(item => <Person key={item.name} person={item} />)}
            </div>
        )
    }
}

const Person = (props) => <h4>{props.person.name}</h4>;

export default ComponentFromArrays;