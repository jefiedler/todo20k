import React from 'react';
import "./Title.css"

function Title() {
    return (
        <>
        <header className="title">
            <h1 className="title_text">ToDo List</h1>
            <input className="search" placeholder="Search ToDos"/>
        </header>
        </>
    );
}

export default Title;