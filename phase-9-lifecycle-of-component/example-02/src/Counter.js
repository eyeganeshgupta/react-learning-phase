import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(syntheticBaseEvent) {
        this.setState((currentState) => {
            return {
                count: currentState.count + 1,
            };
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        console.log("In rendered method");
        return (
            <section>
                <h2>Count: {this.state.count}</h2>
                {/* Math.random() */}
                <button onClick={this.handleClick}>Increment</button>
            </section>
        );
    }
}
