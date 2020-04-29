$(function() {
    var isFlipped = false;
    var $flip_button = $('#flip_button');
    var $flip_card = $('.flip_card');
    var $flip_card_inner = $('.flip_card_inner');

    $flip_button.on('click', function() {
        // output value of isFlipped for debugging
        console.log(isFlipped);

        if (!isFlipped) {
            console.log('not flipped');
            /*
            $flip_card.css('box-shadow', 'none');
            */
            $flip_card_inner.css('transform', 'rotateY(180deg)');
            isFlipped = true;  // now the card is flipped to back
        }
        else {
            console.log('flipped');
            $flip_card_inner.css('transform', 'initial');
            isFlipped = false;  // card is on front side now
        }
    });
});
