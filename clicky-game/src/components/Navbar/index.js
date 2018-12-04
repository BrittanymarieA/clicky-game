import React from "react";

function Navbar(props) {
    return (
        <nav>
            <ul>
                <li>Clicky Game!</li>
                <li>Welcome to Clicky Game!</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    )
}

export default Navbar;
