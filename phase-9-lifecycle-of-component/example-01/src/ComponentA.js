import { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
    componentDidMount() {
        console.log("Component A: componentDidMount()");
    }

    constructor(props) {
        super(props);
        console.log("Component A: constructor()");
        this.state = {
            firstName: "Ganesh",
        };
    }

    static getDerivedStateFromProps() {
        console.log("Component A: getDerivedStateFromProps()");
        return null;
    }

    render() {
        console.log("Component A: render()");

        return (
            <div>
                <h1>{this.state.firstName}</h1>
                <ComponentB />
            </div>
        );
    }
}
