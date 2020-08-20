import React from 'react';
import styled from '@emotion/styled';

function ToDo({task}) {
    const [complete, setComplete] = React.useState(task.complete);

    function completeTodo(){
        setComplete(true);
    }

    function resetTodo(){
        setComplete(false);
    }
    
    return (
        <Container complete={complete}>
            <h2>{task.task}</h2>
            <Button onClick={completeTodo}>Finish</Button>
            <ResetButton onClick={resetTodo}>Reset</ResetButton>
        </Container>
    );
}

export default ToDo;

//Styling

const Container = styled.div`
    padding: 10px;
    background: ${(props) => (props.complete ? "#46B39D" : "#DE4F3C")};
`
const Button = styled.button`

`
const ResetButton = styled.button`

`

