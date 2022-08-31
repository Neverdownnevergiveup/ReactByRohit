import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Count: 536
        }
    }
    increment() {
        this.setState({
            Count: this.state.Count + 1
        }, () => {
            console.log('Callback value', this.state.Count)
        })
        console.log(this.state.Count);
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (<div>
            <div>Count - {this.state.Count}</div>
            <button onClick={() => this.incrementFive()}>increment</button>
        </div>)
    }
}
export default Counter;
