export async function fetchToDos() {
    const respons = await fetch("http://localhost:3001/todos");
    if (!respons.ok){
        throw respons;
    }
    const result = await respons.json();

    return result;
}

export async function postToDos(todo) {
    const respons = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(todo)
    });
    if (!respons.ok){
        throw respons;
    }
    const result = await respons.json();

    return result;
}