import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, withRouter } from "react-router-dom";

import logo from "./assets/logo512.png";


class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <p>hello world!</p>
                    <img src={logo} />
                </Router>
            </div>
        );
    }
}

export default App;
