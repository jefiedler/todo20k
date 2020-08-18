import React, { useEffect } from 'react';

import './App.css';
import Title from './components/Title';
import List from './components/List/List';
import ListItem from './components/List/ListItem';
import { fetchToDos } from './api/fetchToDos';


function App() {
  const [toDos, setToDos] = React.useState(null);


  useEffect(() => {
    async function fetchToDo() {
      const toDo = await fetchToDos();
      setToDos(toDo);
    }

    fetchToDo();
  }, []);

  return (
    <div className="app">
      <Title />
      <main>
        <List>
          {toDos?.map((toDo) => (
            <ListItem key={toDo.id} taskText={toDo.task}></ListItem>
          ))}
        </List>
      </main>
    </div>
  );
}

export default App;
