$(document).ready(function () {
    let tabsItem = $('.twitter-tabs');
    tabsItem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
       // $('.animated', '.bounceinRight', '.delay-1.5s').toggleClass('animated bounceInRight delay-1.5s');
       // $(activeContent).toggleClass('animated bounceInRight delay-1.5s');
       $('.animated').toggleClass('animated bounceInRight delay-0.5s');
       $(activeContent).toggleClass('animated bounceInRight delay-0.5s');
        $('.twitter-tabsactive').toggleClass('twitter-tabsactive');
        $(this).toggleClass('twitter-tabsactive');
    })
});