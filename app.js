// Code 01: Functional Component
// Original Code:

import React from 'react'; 
const Greeting = ({ name }) => { 
    return <div>Hello, {name}!</div>;
};
export default Greeting;
Conversion Steps:

// 1.Add TypeScript to the project if not already added.
// 2.Define a type for the component props.
// 3.Use this type to annotate the props in the functional component.
// 4.Ensure the file has a .tsx extension.


// Converted Code:
import React from 'react';

// Step 2: Define a type for the props
type GreetingProps = {
    name: string;
};

// Step 3: Annotate the props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;


// Code 02: Class Component
// Original Code:

import React, { Component } from 'react'; 
class Counter extends Component { 
    state = {
        count: 0
    }; 
    increment = () => {
        this.setState({ count: this.state.count + 1 }); 
    }; 
    render() { 
        return (
            <div> 
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
            </div>
        );
    }
} 
export default Counter;


// Conversion Steps:

// 1.Define a type for the component state.
// 2.Define a type for the component props if any.
// 3.Extend React.Component with the appropriate generic types.
// 4.Annotate the state and props.
// 5.Ensure the file has a .tsx extension.

// Converted Code:

import React, { Component } from 'react';

// Step 1: Define a type for the state
type CounterState = {
    count: number;
};

// Step 2: Define a type for the props (empty in this case)
type CounterProps = {};

// Step 3: Extend React.Component with the appropriate types
class Counter extends Component<CounterProps, CounterState> {
    // Step 4: Annotate the state
    state: CounterState = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
// Explanation of Changes
// Greeting Component:

// Prop Type Definition: Defined GreetingProps to specify the type of name.
// Functional Component Annotation: Used React.FC<GreetingProps> to ensure the Greeting component accepts the correct props.
// Counter Component:

// State Type Definition: Defined CounterState to specify the type of the component's state.
// Prop Type Definition: Defined CounterProps, even though it’s empty, to maintain consistency and extendability.
// Class Component Annotation: Extended React.Component<CounterProps, CounterState> to ensure the Counter component has the correct props and state types.
// State Initialization: Added type annotation for the state.
