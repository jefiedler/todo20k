export async function fetchToDos() {
    const respons = await fetch("http://localhost:3333/todos");
    if (!respons.ok){
        throw respons;
    }
    const result = await respons.json();

    return result;
}
