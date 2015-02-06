var flag=0;
var cnt=0;
$(document).ready(function()
{
        $(".list").click(function () {

            var vis1=$(".listMenu").css("visibility");

            if(vis1=="hidden") {
                $(".listMenu").css("visibility", "visible");
                $(".listMenu").animate({width: '90%'});
            }
            else
            {
                $(".listMenu").css("visibility", "hidden");
            }

         });


    $(".user").click(function(){
        var vis2=$(".userMenu").css("visibility");
        if(vis2=="hidden") {
            $(".userMenu").css("visibility", "visible");
            $(".userMenu").animate({width: '90%'});
        }
        else
        {
            $(".userMenu").css("visibility", "hidden");

        }

        });

});

