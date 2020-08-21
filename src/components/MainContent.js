import React from 'react';
import useAsync from '../hooks/useAsync';
import ToDo from './ToDo';
import {fetchToDos} from '../api/fetchToDos';
import { useQuery } from 'react-query';

function MainContent() {
    const { data: toDos, loading, error} = useAsync(fetchToDos);

    const todosQuery = useQuery('todos', fetchToDos);

    console.log(todosQuery);

    return (
        <div>
    	    {todosQuery.isLoading && <div>Loading...</div> }
            {todosQuery.data ?.map((todo) => (
              <ToDo key={todo.id} task={todo}></ToDo>
            ))}
            {todosQuery.isError && <div>API is temporarily offline</div>}
        </div>
    );
}

export default MainContent;