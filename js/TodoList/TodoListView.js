var TodoListView = (function () {
    //variaveis que ficam restritas a camada de view

    var containerList = $('.js-container-list'),
        itemTemplate = $('#tpl-task'),
        formCad = $('.js-form-cad'),
        inputTask = $('.js-input-task');

    formCad.on('submit', function (e) {
        e.preventDefault();
        TodoListController.formCadSubmited(inputTask.val())
        inputTask.val('');
    });

    //renderiza na tela a lista recebida por parêmetro
    var renderLIst = function (p_list) {
        containerList.empty();

        for (var i = 0; i < p_list.length; i++) {
            //operador ternário, if resumido
            var itemClass = (p_list[i].status == "done") ? "alert-success" : "alert-info";
            var classTitle = (p_list[i].status == "done") ? "done" : "";

            //html de cada task/button da aplicação
            var tmp_element = itemTemplate
                .html()
                .replace(/{{class}}/g, itemClass)
                .replace(/{{title}}/g, p_list[i].title)
                .replace(/{{classTitle}}/g, classTitle);

            //converte ele para um elemento jquery
            tmp_element = $(tmp_element);

            //dentro do elemento tem outros elementos que podemos manipular
            tmp_element.find('.js-update-btn').on('click', { key: i, task: p_list[i] }, function (e) {
                console.log("atualizar uma task")
                console.log(e.data.key)
                console.log(e.data.task)
                e.preventDefault();
                //chama o controler,
                TodoListController.taskUpdatedClicked(e.data.key, e.data.task);

            })

            tmp_element.find('.js-delete-btn').on('click', { key: i }, function (e) {
                e.preventDefault();
                console.log("apagar uma task")
                console.log(e.data.key)
                //chama o controler
                TodoListController.taskDeleteClicked(e.data.key);

            })

            containerList.append(tmp_element);
        }

    }

    //expor para poder usar fora da view
    return {
        renderLIst: renderLIst
    }

})()