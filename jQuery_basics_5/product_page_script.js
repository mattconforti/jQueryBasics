// get matched set of all product cards on page
var $product_cards = $('.product_card');
var num_of_cards = $product_cards.length;

console.log(num_of_cards);

// get different parts of a product card
var $product_images = $('.image');

// for each product image, get the src (source path)
$product_images.each(function() {
    console.log($(this).attr('src'));
});

/* TODO: check to see which brand the user clicked on,
         and set the images, prices, and name info accordingly
*/