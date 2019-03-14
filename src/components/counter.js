import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment() {this.setState({counter: this.state.counter + 1})};

    decrement() {this.state.counter > 0 && 
        this.setState({counter: this.state.counter - 1})};


    render() {
        return (
            <div className='container'>
                <h1 className='header'>{this.state.counter}</h1>
                <button className='button' onClick={this.decrement}>-</button>
                <button className='button' onClick={this.increment}>+</button>
            </div> 
            )
    }
}

export default Counter;