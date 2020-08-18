import React from 'react';

import './App.css';
import Title from './components/Title';
import List from './components/List/List';
import ListItem from './components/List/ListItem';

function App() {
  return (
    <div className="app">
      <Title />
      <main>
        <List>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </main>
    </div>
  );
}

export default App;
