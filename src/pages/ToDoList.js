import React from 'react';
import Title from '../components/Title';
import List from '../components/List/List';
import ListItem from '../components/List/ListItem';
import {fetchToDos} from '../api/fetchToDos';

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
      </>
    );
  }

export default ToDoList;