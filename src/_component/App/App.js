import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { history } from "../../_helpers/history";
import CreateKnowledgePage from "../CreateKnowledgePage/CreateKnowledgePage";
import FindCoursePage from "../FindCoursePage/FindCoursePage";
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
                        <Link to="/createKnowledge" >Create Knowledge</Link>
                        <Link to="/myCourse"> My course</Link>
                    </div>
                    <div variant="container">

                        <Switch>
                            <Route path="/knowledge">
                                <KnowledgePage/>
                            </Route>
                            <Route path="/findCourse">
                                <FindCoursePage/>
                            </Route>
                            <Route path="/createKnowledge">
                                <CreateKnowledgePage/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}