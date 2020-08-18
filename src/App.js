import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  Link } from 'react-router-dom';
import ToDoList from './pages/ToDoList';

function App() {
  return(
  <Router>
    <div className="app">
      <Switch>
        <Route path="/todo"> 
          <ToDoList />
        </Route>
        <Route>
         
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
