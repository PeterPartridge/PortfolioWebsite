//using Jquery.cycle
$("document").ready(function () {
    //values for drop down boxes
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    //javascript librabry drop down
    $("#javaLibrary").click(function () {
        if (a === 0) {
            $("#javaLibraryDropDown").removeClass("removeClassOnClick").hide().fadeIn();
            a++;
        }
        else if(a===1) {
            $("#javaLibraryDropDown").fadeOut("slow");
            a--;
        }
        });
    

//programming languages drop down
    $("#programingLang").click(function () {
       

        if (b === 0) {
            $("#programmingLangDropDown").removeClass("removeClassOnClick").hide().fadeIn();
            b++;
        }
        else {
            $("#programmingLangDropDown").fadeOut("slow");
            b--;
        }
    });

    //Frameworks drop down
    $("#framework").click(function () {
        if (c === 0) {
            $("#frameworkDropDown").removeClass("removeClassOnClick").hide().fadeIn();
            c++;
        }
        else {
            $("#frameworkDropDown").fadeOut("slow");
            c--;
        }
    });
    //potfolio
    $("#portfolio").click(function () {


        if (d === 0) {
            $("#portfolioDropDown").removeClass("removeClassOnClick").hide().fadeIn();
            d++;
        }
        else {
            $("#portfolioDropDown").fadeOut("slow");
            d--;
        }
    });
    $("#contact").click(function () {


        if (e === 0) {
            $("#contactDropDown").removeClass("removeClassOnClick").hide().fadeIn();
            e++;
        }
        else {
            $("#contactDropDown").fadeOut("slow");
            e--;
        }
    });
    });