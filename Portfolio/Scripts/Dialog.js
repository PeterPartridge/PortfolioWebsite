$(document).ready(function () {
    // hide the hover container
    $("#hoverText").hide();

    //hover event
    $("#welcome").hover(function () {
        $("#hoverText").toggle(1000);
    });

    //on click function for dialog box
    $(function () {
        $("#welcome").click(function () {
            $("#dialog").dialog("open");
        });
    });



    //dialog function
    $(function () {
        $("#dialog").dialog({
            autoOpen: false,
            width: 500,
            height: 500,
            resizable: false,
            modal: true,
            buttons: [{
                text: "close",
                click: function () {
                    $("#dialog").dialog("close");
                }
            }
            ]
        });

        //hide the title bar
        $(".ui-dialog-titlebar").hide();
        $("#dialog").addClass("ui-widget-shadow");
    });
});