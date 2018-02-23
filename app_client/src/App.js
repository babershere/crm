import React, { Component } from 'react';
import {browserRouter as Router, route} from "react-router-dom";
import Home from ".components/Home";

//employee
import employee from "./components/employees/employee"
import employee from "./components/employees/employee"
import employee from "./components/employees/employee"
import employee from "./components/employees/employee"


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
      <Router>
        <div>
          <NavBar/>
      <Router exact path = "/" component={home}/>
          <Router exact path="/employees" component={Employeehome} />
          <Router exact path="/employees/add" component={EmployeeAdd}/>
          <Router exact path="/employees/edit/:id" component={EmployeeEdit}/>
          <Router exact path="/employees/view/:id" component={EmployeeView}/>
      </div>
      </Router>
    );
  }
}

export default App;
