// Done
$(".content").on("click", "li", function(){
    $(this).toggleClass("done");
});

// Delete
$(".content").on("click", ".delete", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

// Adding a New Todo
$(".content").on("keypress", ".addTodo", function(event){
    var textVal = $(this).val();
    if(event.which === 13 && textVal !== ""){
        //addTodo(textVal);
        $(this).parent().append("<li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span> " + textVal + "</li>");
        $(this).val("");
    }
});

// function addTodo(newTodo){
//     $("ul").append("<li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span> " + newTodo + "</li>");
// }

// Adding a New Todo List
$(".content").on("click", ".newList", function(event){
    $(".content").append("<div id=\"container\"> <h1><input class=\"addName\" type=\"text\" placeholder=\"ToDo List Name\"> <i class=\"fas fa-plus newList\"></i></h1><ul><input class=\"addTodo\" type=\"text\" placeholder=\"Add New ToDo\"><li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span> Feed Dog</li><li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span> Call Mario</li></ul></div>");
});

// Adding Todo List Name
$(".content").on("keypress", ".addName", function(event){
    var textVal = $(this).val();
    if(event.which === 13 && textVal != ""){
        $(this).parent().html(textVal +  "<i class=\"fas fa-plus newList\"></i>");
    }
});