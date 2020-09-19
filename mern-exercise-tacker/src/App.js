import React, { Component, useReducer } from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar"
import ExerciseList from "./components/exercises-list.component.jsx";
import UsersList from "./components/users-list.component.jsx";
import CreateExercise from "./components/createExercise";
import createUser from "./components/createUser";

class App extends Component {
  state = {
    test : "props test"
  }
  render() { 
    return ( 
      <Router>
        <NavBar/> <br/>
        <Route path="/" exact  component={ExerciseList} />
        <Route path="/users" exact  component={UsersList} />
        <Route path="/createExercise" data={this.state.test} exact component={CreateExercise} />
        <Route path="/createUser" exact component={createUser}/>
      </Router>
     );
  }
}
 
export default App;
