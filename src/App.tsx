import React, { Component, Fragment } from 'react';
import renderRoutes from "./utils/renderRoutes"
import { routes } from "./router"
import { Switch, Redirect } from "react-router-dom"
import DownApp from "./common/downApp/index"


class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Redirect from='/' to='/awardDetail' exact />
                    {renderRoutes(routes)}
                </Switch>
                {/* <DownApp /> */}
            </Fragment>
        );
    }
}

export default App;
