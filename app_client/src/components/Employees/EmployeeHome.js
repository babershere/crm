import React, { Component } from 'react';
import {Link} from "react-router-dom";

class EmployeeHome extends Component {
    render() {
        return (
            <div>
                <h1>Employee Home <Link className="btn btn-primary" to="/employees/add">Add Employee</Link></h1>
            </div>
        )
    }
}
export default EmployeeHome;