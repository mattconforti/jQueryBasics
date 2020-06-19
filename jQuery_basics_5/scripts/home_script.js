$(function() {
    $("a").each(function () {
        // if the link is active
        if (window.location.pathname.indexOf($(this).attr("href")) != -1) {
            $(this).css("background-color", "black");
            $(this).css("color", "white");
            return;
        }
        else {
            $(this).css("background-color", "#eee");
            $(this).hover(function() {
                $(this).css("background-color", "#ccc");
            }, function() {
                $(this).css("background-color", "#eee");
            });
        }
    });
});