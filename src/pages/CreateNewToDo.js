import React from 'react';
import { Link } from 'react-router-dom';
import { postToDos } from '../api/fetchToDos';

function CreateNewToDo() {
    const [task, setTask] = React.useState("");
    const [author, setAuthor] = React.useState("");

    function handleTaskChange(event) {
        setTask(event.target.value);
    }

    function handleAuthorChange(event){
        setAuthor(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await postToDos({
            task,
            author,
            createdAt: Date.now(),
        });
        setTask("");
        setAuthor("");
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
            <input type="submit" value="Send" disabled={!task || !author}/>
        </form>
        <footer>
            <Link to="/todo">ToDo-Liste</Link>
        </footer>
    </>
    );
}

export default CreateNewToDo;

