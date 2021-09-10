import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class FindCoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            q: "",
            result: null,
            data: "",
        };
        this.componentDidMount();
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.getCourseList();
    }
    getCourseList() {
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
                summary: "Nhu qq",
                tag: "Gay boy",
                Type: "Word",
                Rating: {
                    like: 150,
                    hate: 23,
                },
                Link: "/sadas/sadas/sadas",
            }, {
                name: "Nam1",
                summary: "Nhu qq1",
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
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { error, isLoaded, q, result, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="sadsa">
                    <input
                        onChange={this.handleChange}
                        placeholder="Name course"
                        name={data}
                    />
                    <button onClick={() => window.location.reload(false)}> Search</button> {/* search button de tim course*/}
                    {result.map(item =>
                        <div className="border">
                            <div>{item.name}</div>
                            <div>{item.summary}</div>
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