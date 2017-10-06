/*global $*/
$(function() {
 var state = {
    items: []
};   
$("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    var newItem = $(this).find('#shopping-list-entry').val();
    addItem(state, newItem);
  //  renderList(state,$("ul.shopping-list"));
});
    $( document ).on("click", "button.shopping-item-toggle",{}, function() {
    event.stopPropagation();
    $(this).parent().siblings(".shopping-item").toggleClass("shopping-item__checked");
});
    $( document ).on("click", "button.shopping-item-delete",{}, function() {
    event.stopPropagation();
    console.log($(this).parent().parent());
        $(this).parent().parent().remove();
//    deleteItem(state, $(this).parent().siblings(".shopping-item").text());
//    renderList(state, $("ul.shopping-list"));
});
});
function deleteItem(state, item){
    var place = state.items.indexOf(item);
    if (place > -1){
        state.items.splice(place, 1);
    }
}
function addItem(state, item){
    state.items.push(item);
    $("ul.shopping-list").append('<li><span class="shopping-item">' + item + 
        "</span><div class='shopping-item-controls'>"+
          "<button class='shopping-item-toggle'>"+
           "<span class='button-label'>check</span>"+
          "</button>"+
          "<button class='shopping-item-delete'>"+
            "<span class='button-label'>delete</span>"+
          "</button>"+
        "</div></li>");
}
function renderList(state, element){
     var itemsHTML = state.items.map(function(item) {
        return '<li><span class="shopping-item">' + item + 
        "</span><div class='shopping-item-controls'>"+
          "<button class='shopping-item-toggle'>"+
           "<span class='button-label'>check</span>"+
          "</button>"+
          "<button class='shopping-item-delete'>"+
            "<span class='button-label'>delete</span>"+
          "</button>"+
        "</div></li>";
    });
    element.html(itemsHTML);
}