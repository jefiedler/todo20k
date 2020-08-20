import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <Link to="/todo">Go to ToDo list</Link>
            <Link to="/createNewTask">Go to creat new task</Link>
        </div>
    );
}

export default Home;