"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = new URL('https://jsonplaceholder.typicode.com/todos/1');
axios_1["default"]
    .get(url.toString())
    .then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
})["catch"](function (error) {
    console.log(error.message);
});
var logTodo = function (id, title, completed) {
    console.log("\n      The Todo with ID: " + id + "\n      Has a title of: " + title + "\n      is it finished? " + completed + "\n    ");
};
