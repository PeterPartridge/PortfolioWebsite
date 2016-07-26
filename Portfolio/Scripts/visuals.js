$(document).ready(function () {

    //hidden
    $("#startTextOne").hide();
    $("#startTextTwo").hide();
    $("#startTextThree").hide();
    $("#welcomeDone").hide();
    $("#frameworks").hide();
    $("#startTextFour").hide();
    //hidden


    //welcome text 
    $("#startTextOne").fadeIn(3000).fadeOut(3000, function () {
        $("#startTextTwo").fadeIn(3000).fadeOut(3000, function () {
            $("#startTextThree").fadeIn(3000).fadeOut(3000, function () {
                $("#startTextFour").fadeIn(3000, function () {
                    $(".start").removeClass("hiddenAtStart", { duration: 5000, easing: "easeInOutQuart" });
                });
            });
        });
    });

    //toggle slide 
    $("#frame").click(function(){
        $("#frameworks").slideToggle();
    });
});