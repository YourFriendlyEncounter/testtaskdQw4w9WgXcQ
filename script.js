let timeOut = 250;
let tab = 0;
$(function(){
    let today = new Date();
    let hour = today.getHours();
    let salutations = ["Доброе утро", "Добрый день", "Добрый вечер"];
    if(hour < 10)
        $('span#span-timeOfDay').text(salutations[0]);
    else if(hour >= 12 && hour < 18)
        $('span#span-timeOfDay').text(salutations[1]);
    else
        $('span#span-timeOfDay').text(salutations[2]);
    $('li#li-left').click(function () {
        if(tab === 0)
            return;
        $('div#contact-info').fadeOut(timeOut);
        setTimeout(function () {
            $('div#content-main-info').fadeIn(timeOut);
        }, timeOut);
        changeInfoHeader("Основная информация");
        tab = 0;
    });
    $('li#li-right').click(function () {
        if(tab === 1)
            return;
        $('div#content-main-info').fadeOut(timeOut);
        setTimeout(function () {
            $('div#contact-info').fadeIn(timeOut);
        }, timeOut);
        changeInfoHeader("Контактная информация");
        tab = 1;
    });
    $('span#show-phone').click(function () {
        $(this).removeClass("hidden-info");
        $(this).text("8 951 445 09 17");
    });
    $('span#show-email').click(function () {
        $(this).removeClass("hidden-info");
        $(this).text("annonestalker@gmail.com");
    });
    $('span#show-vk').click(function () {
        $(this).removeClass("hidden-info");
        $(this).text("vk.com/id297853863");
    });
});
function changeInfoHeader(text) {
    $('h1#info-header').fadeOut(timeOut);
    setTimeout(function () {
        $('h1#info-header').text(text);
    }, timeOut)
    $('h1#info-header').fadeIn(timeOut);
}