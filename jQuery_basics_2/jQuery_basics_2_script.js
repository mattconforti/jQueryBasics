$('#add_button').on('click', function() {
    // store list items in jQuery variable
    var $listItems = $('.list_item');

    // create counter for how many list items we have
    var counter = $listItems.length;
    counter++;

    // create the new list item and insert it
    const $newItem = $(`<div class="list_item">
    <input type="checkbox" id="check${counter}" name="item${counter}" 
     value="TODO${counter}">
    <input type="text" id="in${counter}" name="input${counter}" 
     placeholder="Enter text here">
    </div>`);

    $listItems.last().after($newItem);

    // get current set of inputs for debugging
    var $textInputs = $('input[type="text"]');
    $textInputs.each(function() {
        console.log("Input ID# " + this.id);
    });
});

$('#clear_button').on('click', function() {
    // use .val() to set value of inputs
    $('input[type="text"]').val('');

    // use .prop() to uncheck boxes
    $('input[type="checkbox"]').prop("checked", false);
});
