$(document).ready(function () {

    $("article.video-game-console").wrapAll('<div class="consoles"></div>');
    $(".consoles").prepend("<h2>Consoles</h2>")

    $("article.controller").wrapAll('<div class="controllers"></div>');
    $(".controllers").prepend("<h2>Controllers</h2>")

    $("article.accessory").wrapAll('<div class="accessories"></div>');
    $(".accessories").prepend("<h2>Accessories</h2>")

    $("article.game").wrapAll('<div class="games"></div>');
    $(".games").prepend("<h2>Games</h2>")

});