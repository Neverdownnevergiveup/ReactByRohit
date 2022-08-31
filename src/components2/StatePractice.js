// import React, { Component } from 'react'
import React from "react";

export default class StatePractice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Brand:"TOYATA",
            Model:"cla200",
            Color:"Red",
            Year:"2020"

        };
    }
    changeColor = () => {
        this.setState({
            Brand:"Audi",
            Model:"320L",
            Color:"blue",
            Year:"2018"
        });
    };
    changeBrand = () => {
        this.setState({
            Brand:"Murcdise",
            Model:"320L",
            Color:"red",
            Year:"2019"
        });
    };
    changeModel = () => {
        this.setState({
            Brand:"Audi",
            Model:"4376l",
            Color:"red",
            Year:"2020"
        });
    };
    changeYear = () => {
        this.setState({
            Brand:"Audi",
            Model:"320L",
            Color:"red",
            Year:"2022"
        });
    };
    render() {
        return (
            <div className="ppr">
                <h1>MY {this.state.Brand}</h1>
                <p>This is my First Choice {this.state.Brand} and Model is {this.state.Model} as well as My Color is {this.state.Color} and I was buy in {this.state.Year} </p>
                <button type='button' onClick={this.changeBrand}>Change Brand</button>
                <button type='button' onClick={this.changeModel}>Change Model</button>
                <button type='button' onClick={this.changeColor}>Change Color</button>
                <button type='button' onClick={this.changeYear}>Change Year</button>


            </div>
        );
    };
};
