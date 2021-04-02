const todos = []
module.exports = {
    getAll,
    
    create,

};

function getAll() {
    return todos;
}



function create(todo) {
    todos.push(todo)
    return (todo);
}

