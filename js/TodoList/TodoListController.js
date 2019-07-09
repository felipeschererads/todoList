var TodoListController = (function (TodoListModel, TodoListView) {

    //ligou o model com a view
    var renderAllTask = function (p_list) {

        TodoListView.renderLIst(p_list)
    }

    var taskUpdatedClicked = function(p_key,p_task){
        TodoListModel.updateTask(p_key, p_task.title, 'done', renderAllTask)
    }

    var taskDeleteClicked = function(p_key){
        TodoListModel.deleteTask(p_key, renderAllTask)
    }

    var formCadSubmited = function(p_title){
        TodoListModel.newTask(p_title,'doing',renderAllTask)
    }

    TodoListModel.getAllTasks(renderAllTask)

    return {
        taskUpdatedClicked : taskUpdatedClicked,
        taskDeleteClicked : taskDeleteClicked,
        formCadSubmited : formCadSubmited
    }

})(TodoListModel, TodoListView)