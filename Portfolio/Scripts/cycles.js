//using Jquery.cycle
$("document").ready(function () {

    //javascript framework cycler
    $("#javaFramorks").cycle({
        fx: 'scrollHorz',
        timeout: 2000,
        next: '#javaFramorks'
    });

    
    $("#programmingLang").cycle({
        fx: 'scrollHorz',
        timeout: 2000,
        next: '#programmingLang'
    });

    $("#frameworks").cycle({
        fx: 'scrollHorz',
        timeout: 2000,
        next: '#frameworks'
    });
    
    $("#workDone").cycle({
        fx: 'scrollHorz',
        timeout: 2000,
        next: '#workDone'
    });
});