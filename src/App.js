import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import ToDoList from './pages/ToDoList';
import CreateNewToDo from './pages/CreateNewToDo';

function App() {
  return(
  <Router>
    <div className="app">
      <Switch>
        <Route path="/todo"> 
          <ToDoList />
        </Route>
        <Route path="/createNewTask">
         <CreateNewToDo />
        </Route>
      </Switch>
      <footer>
        <Link to="/todo">ToDo-Liste</Link>
        <Link to="/createNewTask">Create New Task</Link>
      </footer>
    </div>
  </Router>
  );
}
export default App;
