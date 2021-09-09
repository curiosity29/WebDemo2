import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { history } from "../../_helpers/history";
import KnowledgePage from "../KnowledgePage/KnowledgePage";
export default class App extends React.Component {
    render() {
        return (
            <div variant="app">
                <Router>
                    <div variant="header">
                        <Link to="/knowledge" className="">Find knowledge</Link>
                        <Link to="/createCourse" >Create course</Link>
                        <Link to="/findCourse" >Find course</Link>
                        <Link to="/account"> Account</Link>
                    </div>
                    <div variant="container">

                        <Switch>
                            <Route path="/knowledge">
                                <KnowledgePage/>
                            </Route>
                            <Route path="/createCourse">
                                
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}