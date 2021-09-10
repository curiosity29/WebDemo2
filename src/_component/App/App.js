import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { history } from "../../_helpers/history";
import CreateKnowledgePage from "../CreateKnowledgePage/CreateKnowledgePage";
import FindCoursePage from "../FindCoursePage/FindCoursePage";
import KnowledgePage from "../KnowledgePage/KnowledgePage";
import LearningPage from "./LearningPage";
import CreateCoursePage from "./CreateCoursePage";
export default class App extends React.Component {
    render() {
        return (
            <div variant="app">
                <Router>
                    <div variant="header">
                        <Link to="/knowledge" className="">Find knowledge</Link>
                        <Link to="/CreateCourse" >Create course</Link>
                        <Link to="/findCourse" >Find course</Link>
                        <Link to="/createKnowledge" >Create Knowledge</Link>
                        <Link to="/myCourse"> My course</Link>
                        <Link to="/LearningPage"> Learning page</Link>
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
                            <Route path="/LearningPage">
                                <LearningPage/>
                            </Route>

                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}