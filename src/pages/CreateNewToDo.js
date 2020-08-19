import React from 'react';
import { Link } from 'react-router-dom';

function CreateNewToDo() {
    const [task, setTask] = React.useState("");
    const [author, setAuthor] = React.useState("");

    function handleTaskChange(event) {
        setTask(event.target.value);
    }

    function handleAuthorChange(event){
        setAuthor(event.target.value);
    }

    function handleSubmit(event) {
        console.log(task, author);
        event.preventDefault();
    }


    return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Task:
            <input type="text" value={task} onChange={handleTaskChange} />
            </label>
            <label>
                Author:
            <input type="text" value={author} onChange={handleAuthorChange} />
            </label>
            <input type="submit" value="Send" />
        </form>
        <footer>
            <Link to="/todo">ToDo-Liste</Link>
        </footer>
    </>
    );
}

export default CreateNewToDo;

