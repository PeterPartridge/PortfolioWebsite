//using Jquery.cycle
$("document").ready(function () {

    //javascript framework cycler
    $("#javaFramorks").cycle({
        fx: 'scrollHorz',
        timeout: 0,
        next: '#javaFramorks'
    });

    
    $("#programmingLang").cycle({
        fx: 'scrollHorz',
        timeout: 0,
        next: '#programmingLang'
    });
});