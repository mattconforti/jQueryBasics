$('#add_button').on('click', function() {

    // store list items in jQuery variable
    var $listItems = $('.list_item');

    // create counter for how many list items we have
    var counter = $listItems.length;

    // add to the counter as we are about to create a new item
    counter++;

    // create the new list item
    const $newItem = $(`<div class="list_item">
    <input type="checkbox" id="check${counter}" name="item${counter}" value="TODO${counter}">
    <input type="text" id="in${counter}" name="input${counter}" placeholder="Enter text here">
    </div>`);

    // insert new item after the current last item
    $listItems.last().after($newItem);

    // get current set of text inputs for debugging
    var $textInputs = $('input[type="text"]');
    $textInputs.each(function() {
        console.log("Input ID# " + this.id);
    });
});

$('#clear_button').on('click', function() {
    $('input[type="text"]').val('');  // .val() method to set value of input field
    $('input[type="checkbox"]').prop("checked", false);  // .prop() method to uncheck boxes
});
