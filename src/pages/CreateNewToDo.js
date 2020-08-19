import React from 'react';
import { Link } from 'react-router-dom';

function CreateNewToDo() {
    const [value, setValue] = React.useState("");

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        console.log(value);
        event.preventDefault();
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
                Task:
            <input type="text" value={value} onChange={handleChange} />
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

