import React, { Component } from "react";

class EmployeeAdd extends Component {
    constructor(props){
        super(props);
        this.state = { 
            firstName: "",
            lastName: "",
            age: "",
            jobTitle: ""
         };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    }
    render() 
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="firstName">First Name</label>
                        <input value={this.state.firstName} onChange={this.props.handleChange} type="text" className="form-control" name="firstName" placeholder="Enter First name" />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Last Name</label>
                        <input value={this.state.lastName} onChange={this.props.handleChange} type="text" className="form-control" name="lastName" placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group">
                        <label for="firstName">Age</label>
                        <input value={this.state.age} onChange={this.props.handleChange} type="text" className="form-control" name="age" placeholder="Enter DOB" />
                    </div>
                    <div className="form-group">
                        <label for="jobTitle">Job Title</label>
                        <input value={this.state.jobTitle} onChange={this.props.handleChange} type="text" className="form-control" name="jobTitle" placeholder="Enter Job Title" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
        )
    }
}
export default EmployeeAdd;