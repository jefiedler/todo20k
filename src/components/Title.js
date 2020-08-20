import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 10px;
    background: #7D98A8;
`

const Header = styled.header`
    text-align: center;
`

function Title() {
    return (
        <Container>
        <Header>
            <h1>ToDo List</h1>
            <input placeholder="Search ToDos"/>
        </Header>
        </Container>
    );
}

export default Title;