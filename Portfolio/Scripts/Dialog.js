$(document).ready(function () {

    //on click function for dialog box
    $(function () {
        $(".dialogBoxClicker").click(function () {
            $("#shadow").addClass("ui-widget-overlay ui-widget-shadow");
            $("#dialog").dialog("open");
        });
    });

    //dialog function
    $(function () {
        $("#dialog").dialog({
            autoOpen: false,
            width: 500,
            height: 500,
            title:"All about me",
            resizable: false,
            modal: true,
            draggable:false,
            buttons: [{
                text: "close",
                click: function () {
                    $("#dialog").dialog("close");
                }
            }
            ]
        });
    });

    //catches close event and removes shadow
    $("#dialog").on("dialogclose", function(event){
        $("#shadow").removeClass("ui-widget-overlay ui-widget-shadow");
    });
    });
