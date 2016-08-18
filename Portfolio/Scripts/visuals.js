$(document).ready(function () {

    //hides page elements at start.
    $("#startTextOne").hide();
    $("#startTextTwo").hide();
    $("#startTextThree").hide();
   
    //hides page elements at start.


    //when page laods this will fade in and out welcome text and whole document.
    $("#startTextOne").fadeIn(3000).fadeOut(1500, function () {
        $("#startTextTwo").fadeIn(3000).fadeOut(1500, function () {
            $("#startTextThree").fadeIn(3000, function () {
                $(".start").removeClass("hiddenAtStart").hide().fadeIn(1000);
                $("#websiteDropDown").hide();
                    });
                });
    });
    //when page laods this will fade in and out welcome text and whole document.

    //multiple classes sliding up and down at user click events 
    //values for drop down boxes
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    //javascript librabry drop down
    $("#javaLibrary").click(function () {
        if (a === 0) {
            $("#angulareJSDropDown").hide();
            $("#jqueryDropDown").hide();
            $("#jqueryUiDropDown").hide();
            $("#javaLibraryDropDown").removeClass("removeClassOnClick").hide().slideDown();
            a++;
            
        }
        else if (a === 1) {
            $("#javaLibraryDropDown").slideUp("slow");
            a--;
        }
    });


    //programming languages drop down
    $("#programingLang").click(function () {

        if (b === 0) {
            $("#programmingLangDropDown").removeClass("removeClassOnClick").hide().slideDown();
            b++;
        }
        else {
            $("#programmingLangDropDown").slideUp("slow");
            b--;
        }
    });

    //Frameworks drop down
    $("#framework").click(function () {
        if (c === 0) {
            $("#frameworkDropDown").removeClass("removeClassOnClick").hide().slideDown();
            c++;
        }
        else {
            $("#frameworkDropDown").slideUp("slow");
            c--;
        }
    });
    //potfolio
    $("#portfolio").click(function () {
        if (d === 0) {
            $("#portfolioDropDown").removeClass("removeClassOnClick").hide().slideDown();
            d++;
        }
        else {
            $("#portfolioDropDown").slideUp("slow");
            d--;
        }
    });
    //multiple classes sliding up and down at user click events


    //onhover drop down for websites
    $("#website").hover(function () {
        $("#websiteDropDown").slideToggle({direction:"up"});
    });

});
