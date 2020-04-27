$(function() {
    var isFlipped = false;
    var $flip_button = $('#flip_button');
    var $flip_card = $('flip_card');

    $flip_button.on('click', function() {
        if (!isFlipped) {
            console.log('not flipped');
            //TODO: animate flip
            //      set isFlipped to 'true'
            //      exit
        }
        else {
            console.log('flipped');
            //TODO: animate flip back to front side
            //      set isFlipped back to 'false'
            //      exit
        }
    });
});
