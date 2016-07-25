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

    $("#ideAndFrameworks").cycle({
        fx: 'scrollHorz',
        timeout: 2000,
        next: '#ideAndFrameworks'
    });
    
    $("#workDone").cycle({
        fx: 'scrollHorz',
        timeout: 2000,
        next: '#workDone'
    });
});