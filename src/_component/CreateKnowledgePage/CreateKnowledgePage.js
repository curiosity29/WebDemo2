import React from "react";
export default class CreateKnowledgePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            content: "",
            type: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        //send data api to database this.state
    }
    render() {
        return (
            <div variant="LoginPage">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div variant="Name">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" onChange={this.handleChange} />
                    </div>
                    <div variant="Password">
                        <label htmlFor="content">Password</label>
                        <input type="text" className="form-control" name="content" onChange={this.handleChange} />
                    </div>
                    <div variant="Password">
                        <label htmlFor="type">Password</label>
                        <input type="text" className="form-control" name="type" onChange={this.handleChange} />
                    </div>
                    <div variant="Submit">
                        <button className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}