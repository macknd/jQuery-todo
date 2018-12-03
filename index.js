$("#add").click((event)=>{
    event.preventDefault();
    let task = $("#task").val();
    let todo = `<div class="td"><input type="checkbox" id="check">${task} <button class="delete">Delete</button><br></div>`;
    $("#todos").append(todo);
    $("#task").val("");
})

$(document).on("click", "#check", (event)=> {
    if ( $(event.currentTarget).parent().css('textDecoration').includes("line-through")){
        $(event.currentTarget).parent().css('textDecoration', 'none');
    }
    else{
        $(event.currentTarget).parent().css('textDecoration', 'line-through');
    }
    
});

$(document).on("click", ".delete", (event)=> {
    $(event.currentTarget).parent().remove();
})



