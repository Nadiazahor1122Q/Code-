import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home"; 
import Team from "./Pages/Team/Team"; 
import Layout from "./Components/Layout";

function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/team" exact component={Team}/>
                        <Route component={Home}/>
                    </Switch>
                </Layout>
            )}/>
        </BrowserRouter>
    )
}

export default Routes;