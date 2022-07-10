import React from "react";
import ReactDOM from "react-dom";
import { List } from "./components/List";

const App = () => {
    return (
        <div>
            <div>Experiments with Webworker 4</div>
            <List />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("ui_root"));
