const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5a7f26bf01f6c910d1e9116b'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a7f26bf01f6c910d1e9116b').then((todo) => {
    console.log(todo);
});
