import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Main from "components/Main";

@withRouter
export default class Root extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route name="App" path="/" component={Main} />
                </Switch>
            </div>
        )
    }

}
