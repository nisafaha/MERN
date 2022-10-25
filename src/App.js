import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/navbar.component";
import StudentList from "./components/student-list.component";
import EditStudent from "./components/edit-student.component";
import CreateStudent from "./components/create-student.component";

function App() {
  return (
    <Router>
      <Navbar>
      <br/>
      <Route path="/" exact component={StudentList} />
      <Route path="/edit/:id" component={EditStudent} />
      <Route path="/create" component={CreateStudent} />
    </Navbar>
    </Router>
  );
}

export default App;
