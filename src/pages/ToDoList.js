import React from 'react';
import Title from '../components/Title';
import List from '../components/List/List';
import ListItem from '../components/List/ListItem';
import {fetchToDos} from '../api/fetchToDos';
import { Link } from 'react-router-dom';

function ToDoList() {
    const [toDos, setToDos] = React.useState(null);


    React.useEffect(() => {
      async function fetchToDo() {
        const toDo = await fetchToDos();
        setToDos(toDo);
      }
  
      fetchToDo();
    }, []);
  
    return (
      <>
        <Title />
        <main>
          <List>
            {toDos?.map((toDo) => (
              <ListItem key={toDo.id} taskText={toDo.task}></ListItem>
            ))}
          </List>
        </main>
        <footer>
          <Link to="/createNewTask">Create new Task</Link>
        </footer>
      </>
    );
  }

export default ToDoList;