export async function postNewToDo() {
    const respons = await fetch("http://localhost:3333/todos", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json;charset=utf-8"
        },
        body: JSON.stringify()
    });
    if (!respons.ok){
        throw respons;
    }
    const result = await respons.json();

    return result;
}
