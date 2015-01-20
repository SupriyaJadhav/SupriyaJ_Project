/**
 * Created by iternia on 1/5/15.
 */
var image=["../Images/home-4.jpg","../Images/Model Home.jpg"];
var cnt=-1;
function slideImage()
{
    $("#sliderimg").css("float","left");
    $("#sliderimg").css("width","0px");
    $("#sliderimg").css("transition","width 2s");
    $("#sliderimg").css("transition-duration","2s");

   setTimeout(function()
   {
          $("#sliderimg").attr("src",image[++cnt]);
        $("#sliderimg").css("float","right");
        $("#sliderimg").css("width","955px");
    },2000);
   setInterval(slideImage,4000);
}
