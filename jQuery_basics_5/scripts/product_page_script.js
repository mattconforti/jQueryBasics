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
var brand_name = "Adidas"; // find a way to automatically check for this

/* "Adidas"
   "Champion"
*/

// see which brandName we have and act accordingly
switch (brand_name) {
    case "Champion":
        var champion_images = ['../images/heritage_script_champion.jpg'];
        // for every product image, set the image src to a new one in the list
        for (var i=0; i<champion_images.length; i++) {
            $product_images.eq(i).attr('src', champion_images[i]);
        }
        break;
    case "Adidas":
        var adidas_images = ['../images/black_adidas.jpg', '../images/grey_adidas.jpg', '../images/white_adidas.jpg'];
        // for every product image, set the image src to a new one in the list
        for (var i=0; i<adidas_images.length; i++) {
            $product_images.eq(i).attr('src', adidas_images[i]);
        }
        break;
    default:
        break;
}
