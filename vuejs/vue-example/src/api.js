export function loadUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users").then((r) =>
        r.json()
    );
}

export function loadTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos").then((r) =>
        r.json()
    );
}