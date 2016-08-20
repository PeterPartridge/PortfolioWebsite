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

    //onhover drop down for websites and personal projects.
    $("#website").hover(function () {
        $("#websiteDropDown").slideToggle({direction:"up"});
    });

});
