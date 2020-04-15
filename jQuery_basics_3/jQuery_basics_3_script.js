// create variables for all elements in use
var $paragraphs_not_one = $('p:not(#p_one)');
var $toggle_button = $('#show_button');

// hide all paragraphs without id: p_one
$paragraphs_not_one.hide();

// on button click,
$toggle_button.on('click', function() {

    // toggle btw slideUp/Down
    $paragraphs_not_one.slideToggle();

    //TODO: fix button text when slid back up
    // change the button text depending on visibility
    if ($paragraphs_not_one.is(":visible")) {
        $toggle_button.text("Show Less");
    }
    else {
        $toggle_button.text("Show More");
    }
});
