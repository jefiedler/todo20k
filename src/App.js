import React from 'react';
import { BrowserRouter as Router, 
  Switch, 
  Route} from 'react-router-dom';
import ToDoList from './pages/ToDoList';
import CreateNewToDo from './pages/CreateNewToDo';
import Home from './pages/Home';

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
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}
export default App;
