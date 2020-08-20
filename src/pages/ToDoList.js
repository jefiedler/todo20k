import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import MainContent from '../components/MainContent';



function ToDoList() {
 
    return (
      <Container>
        <Title />
        <MainBody>
            <MainContent></MainContent>
        </MainBody>
        <Footer>
          <Link to="/createNewTask">Create new Task</Link>
        </Footer>
      </Container>
    );
  }

export default ToDoList;

// Styling

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const MainBody = styled.main`
    flex-grow: 1 0 auto;
    background: #F2F2F2;
` 

const Footer = styled.footer`
    flex-shrink: 0;
    background: #7D98A8;
    padding: 10px;
`