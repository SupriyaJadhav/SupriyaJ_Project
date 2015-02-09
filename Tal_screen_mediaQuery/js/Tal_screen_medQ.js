/**
 * Created by supriya on 2/9/15.
 */
var flag=0;
var cnt=0;
$(document).ready(function()
{
    $(".list").click(function () {

        var vis1=$(".listMenu").css("visibility");

        if(vis1=="hidden") {
            $(".listMenu").css("visibility", "visible");
            //$(".lstMenu").css({"transition","width 5s"});
            $(".listMenu").animate({width: '90%'});
        }
        else
        {

            //$(".listMenu").animate({transition:"width 5s",width:"0%"});
            $(".listMenu").css({visibility:"hidden"});
        }

    });


    $(".user").click(function(){
        var vis2=$(".userMenu").css("visibility");
        if(vis2=="hidden") {
            $(".userMenu").css("visibility", "visible");
            $(".userMenu").animate({width: '70%'});
        }
        else
        {

            //$(".userMenu").animate({width: '70%'});
            $(".userMenu").css({visibility:"hidden"});

        }

    });

    $(".plusBtn").click(function(){
        var vis3=$(".starInfo").css("visibility");
        if(vis3=="hidden")
        {
            $(".starInfo").css("visibility", "visible");
            $(".plusBtn .glyphicon").removeClass(" glyphicon-plus").addClass("glyphicon-remove");
        }
        else
        {
            $(".starInfo").css("visibility", "hidden");
            $(".plusBtn .glyphicon").removeClass(" glyphicon-remove").addClass("glyphicon-plus");
        }
    });

});

