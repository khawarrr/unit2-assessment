const Todo = require('../models/todo');

module.exports = {
    index,
    delete: deleteTodo,
    create,
    update,
};

function index(req, res) {
    const todos = Todo.getAll();
    if (req.query.edit) {
        res.render('index', {title: 'todos', todos, editId: req.query.id, edit: true});
    } else {
        res.render('index', {title: 'todos', todos, edit: false});
    }
}

function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/');
}

function create(req, res) {
    Todo.create(req.body.todo);

    res.redirect('/');
}

function update(req, res) {
    Todo.updateOne(req.params.id, req.body.todo);
    res.redirect('/');
}