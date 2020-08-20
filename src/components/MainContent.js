import React from 'react';
import useAsync from '../hooks/useAsync';
import ToDo from './ToDo';
import {fetchToDos} from '../api/fetchToDos';

function MainContent() {
    const { data: toDos, loading, error} = useAsync(fetchToDos);

    return (
        <div>
    	    {loading && <div>Loading...</div> }
            {toDos?.map((toDo) => (
              <ToDo key={toDo.id} task={toDo}></ToDo>
            ))}
            {error && <div>API is temporaely offline</div>}
        </div>
    );
}

export default MainContent;