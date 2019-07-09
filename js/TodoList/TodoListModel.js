/* fica todas as funções de busca */

var TodoListModel = (function () {

    var server = "https://floating-everglades-31807.herokuapp.com/";

    var getAllTasks = function (callback) {

        $.ajax({
            url: server
        }).done(function (data) {
            console.log("Recebeu os dados");
            console.log(data);

            if (typeof callback == "function") callback(data)
        });
    }

    var newTask = function (p_title, p_status, callback) {
        $.post(server + "newtask", { title: p_title, status: p_status }, function (data) {
            console.log("Cadastrou nova task");
            console.log(data);
            if (typeof callback == "function") callback(data);

        })
    }

    var updateTask = function (p_key, p_title, p_status, callback) {
        $.ajax({
            url: server + "updatetask/" + p_key,
            type: "PUT",
            data: {
                title: p_title,
                status: p_status
            }
        }).done(function (data) {
            console.log("Atualizou a task");
            console.log(data);

            if (typeof callback == "function") callback(data)
        });
    }

    var deleteTask = function (p_key, callback) {
        $.ajax({
            url: server + "deletetask/" + p_key,
            type: "DELETE",
        }).done(function (data) {
            console.log("Deletou a task");
            console.log(data);

            if (typeof callback == "function") callback(data)
        });
    }

    return {
        getAllTasks: getAllTasks,
        newTask: newTask,
        updateTask : updateTask,
        deleteTask : deleteTask
    }

})();