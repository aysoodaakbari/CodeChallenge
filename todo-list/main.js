var todos = localStorage.getItem("todos");
try {
    todos = JSON.parse(todos)
} catch (error) {
    todos = null

}
console.log(todos);
if (!todos) {
    todos = [
        'shopping',
        'watching tv',
    ]
    localStorage.setItem("todos", JSON.stringify(todos);
    }