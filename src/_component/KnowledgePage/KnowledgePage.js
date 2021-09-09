import React from "react";
import { history } from "../../_helpers/history";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class KnowledgePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            result: [],
        };
        this.componentDidMount();
    }
    componentDidMount() {
        this.getKnowledgeList();
    }
    getKnowledgeList() {
        // fetch("https://api.example.com/items")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 result: result
        //             });
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
        this.setState({
            isLoaded: true,
            result: [{
                name: "Nam",
                content: "Nhu qq",
                tag: "Gay boy",
                Type: "Word",
                Rating: {
                    like: 150,
                    hate: 23,
                },
                Link: "/sadas/sadas/sadas",
            }, {
                name: "Nam1",
                content: "Nhu qq1",
                tag: "Gay boy1",
                Type: "Word1",
                Rating: {
                    like: 1501,
                    hate: 231,
                },
                Link: "/sadas/sadas/sadas1",
            }]
        })
    }
    render() {
        const { error, isLoaded, result } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="">
                    {result.map(item =>
                        <div className="border">
                            <div>{item.name}</div>
                            <div>{item.content}</div>
                            <div>{item.Link}</div>
                            <div>{item.Rating.like}</div>
                            <div>{item.Rating.hate}</div>
                        </div>
                    )}
                </div>
            )
        }
    }
}