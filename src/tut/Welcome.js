import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return <h1> {this.props.name} a.k.s {this.props.HeroName}</h1>
    }
}

export default Welcome