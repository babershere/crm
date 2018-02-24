import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
// employee components
import EmployeeHome from "./components/Employees/EmployeeHome";
import EmployeeAdd from "./components/Employees/EmployeeAdd";
import EmployeeEdit from "./components/Employees/EmployeeEdit";
import EmployeeView from "./components/Employees/EmployeeView";



import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/employees" component={EmployeeHome} />
            <Route exact path="/employees/add" component={EmployeeAdd} />
            <Route exact path="/employees/edit/:id" component={EmployeeEdit} />
            <Route exact path="/employees/view/:id" component={EmployeeView} />
            {/* footer go here yo */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
