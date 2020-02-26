import React, { Component } from 'react';

class Counter extends Component {

    // state = {
    //     counter: this.props.counter.value,
    // }

    style = {
        fontSize: 20,
        fontWeight: 'bold'

    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <span style={this.style} className={this.formatCounterColour()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
        )
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value
    }

    formatCounterColour() {
        let classes = "badge m-2 badge-"
        classes += this.props.counter.value === 0 ? "warning" : "primary"
        return classes;
    }
}

export default Counter;