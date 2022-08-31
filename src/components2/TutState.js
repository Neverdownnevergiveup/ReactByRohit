import React from 'react';
// import React, { Component } from 'react'

export default class TutState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "FORD",
            model: "mustang",
            country: "india",
            color: "red",
            year: 1995
        };
    }
    changeColor = () => {
        this.setState({ color: "BLUE" });
    }
    changeModel = () => {
        this.setState({ brand: "TOYATA" });
    }
    render() {
        return (
            <div>
                <h1>MY {this.state.brand}</h1>
                <p><strong>It is a special {this.state.brand} {this.state.model} from {this.state.country} in this {this.state.color} of this year {this.state.year}
                </strong></p>
                <button type="submit" onClick={this.changeColor}>change color</button>
                <button type="submit" onClick={this.changeModel}>change model</button>

            </div>
        );
    }
}
