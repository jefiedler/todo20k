import React from 'react';
import Title from '../components/Title';
import List from '../components/List/List';
import ListItem from '../components/List/ListItem';
import {fetchToDos} from '../api/fetchToDos';
import { Link } from 'react-router-dom';
import useAsync from '../hooks/useAsync';

function ToDoList() {
    const { data: toDos, loading, error} = useAsync(fetchToDos);
 
    return (
      <>
        <Title />
        <main>
          <List>
            {loading && <div>Loading...</div> }
            {toDos?.map((toDo) => (
              <ListItem key={toDo.id} taskText={toDo.task}></ListItem>
            ))}
            {error && <div>API is temporaely offline</div>}
          </List>
        </main>
        <footer>
          <Link to="/createNewTask">Create new Task</Link>
        </footer>
      </>
    );
  }

export default ToDoList;