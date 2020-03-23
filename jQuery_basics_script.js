// get matched set of li elements
var $listItems = jQuery('li');
// or use $('li') - shorthand for jQuery('li')

// update 2nd li's text
$('li:nth-child(2)').text("updated item2");

// create new element and store in jQuery object
var $newListItem = $('<li>new item (created by jQuery)</li>');

//insert $newListItem after the current last item
$listItems.last().after($newListItem); 