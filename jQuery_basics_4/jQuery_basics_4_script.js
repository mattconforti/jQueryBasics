$(function() {
    var isFlipped = false;
    var $flip_button = $('#flip_button');
    var $flip_card = $('.flip_card');
    var $flip_card_inner = $('.flip_card_inner');

    $flip_button.on('click', function() {
        // output value of isFlipped for debugging
        console.log(isFlipped);

        // rid of box shadow in prep for flip
        $flip_card.css('box-shadow', 'none');

        if (!isFlipped) {
            console.log('not flipped');
            $flip_card_inner.css('transform', 'rotateY(180deg)');
            isFlipped = true;  // now the card is flipped to back
        }
        else {
            console.log('flipped');
            $flip_card_inner.css('transform', 'initial');
            isFlipped = false;  // card is on front side now
        }

        // put box shadow back on after flip animation (1500ms animation)
        setTimeout(function(){
            $flip_card.css('box-shadow', '4px 4px 8px 10px rgba(0,0,0,0.2)');
        }, 1500);
    });
});
