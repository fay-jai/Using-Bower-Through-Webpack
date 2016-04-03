import $ from "jquery";
import React from "react";

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello {this.props.name}</p>
            </div>
        );
    }
}

$("#root").text("Loading bower_components through Webpack, using ES6 syntax!");

React.render(
    <Hello name="Willson" />,
    document.getElementById("react-app")
);
