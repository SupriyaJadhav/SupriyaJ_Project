/**
 * Created by iternia on 1/8/15.
 */
var girl=['PIYA','AMARJA','ADISHRI','NIKHIL','RAVI','KAUSHIK','KIRAN'];
var dash=new Array(10);
var i=0;
var flag=0;
//var newChar=new Array(10);

var  r_no=Math.floor((Math.random()*6)+0);
var randomText=girl[r_no];
//alert(randomText);
var len=randomText.length;
//alert(len);
var newChar=new Array(len);

//var flag=0;
var attempt=0;
var cnt=0;
var WON=0;
var LOSE=0;

$(document).ready(function() {




    $(".container-fluid button").prop('disabled',false);
    for(i=0;i<newChar.length;i++)
    {
        newChar[i]="_                  ";
    $("#target").text(""+newChar);
    }

    $(".container-fluid button").click(function()
    {
        var chara=$(this).text();

        for(i=0;i<len;i++)
        {
            if(chara==randomText[i])
            {
                newChar[i]=chara;
                $("#target").text(newChar);
                flag=1;
                cnt=cnt+1;
            }
        }
        if(flag==0)
        {
            //alert("character not found");
            $(this).css("background-color","red");
            attempt++;

        }
        if(attempt==5)
        {
            LOSE++;
            //alert("Your attempts are over,You lose the game");
           //$("#target").css("visibility","hidden");
            $("#footer").text("You lose game,Word is"+randomText);
           // $("#target").text("  ");
            $(".container-fluid button").prop('disabled',true);
            $("#lose").text(LOSE);
        }

        if(flag==1)
        {
            //alert("character found");
            $(this).css("background-color","green");
            flag=0;
        }
        if(cnt==len)
        {
           // alert("You won the game,word found");
             WON++;
            $("#footer").text("You won,Word is"+randomText);
            $(".container-fluid button").prop('disabled',true);
            $("#won").text(WON);
        }







       //alert($(this).text());
        //var chara=$(this).text();

       // alert(chara);
       // alert(dash);
      //  for(i=0;i<dash.length;i++)
      //  {
      //  $("#target").text(dash);}
        //alert(dash[0]);
        //$("#target").text(dash);

    });
});


function reload()
{
    //var girl=['PIYA','AMARJA','ADISHRI','NIKHIL','RAVI','KAUSHIK','KIRAN'];
    var i=0;
    var flag=0;

  r_no=Math.floor((Math.random()*6)+0);
    randomText=girl[r_no];
//alert(randomText);
    len=randomText.length;
//alert(len);
     newChar=new Array(len);
    for(i=0;i<newChar.length;i++)
    {
        newChar[i]="_                  ";
        $("#target").text(""+newChar);
    }
    $(".container-fluid button").prop('disabled',false);
    flag=0;
    attempt=0;
    cnt=0;
    $(".container-fluid button").css("background-color","white");
    $("#footer").text(" ");

   // $("#target").text(" ");


}


/*function myFunction() //for printing dash
{
   /*     //alert(girl[0].length);
    $("letter").css("margin-left","30px");
    for(i=0;i<girl[0].length;i++)
    {
       /* alert(i);
        alert(girl[0].length);
        document.getElementById("letter").innerHTML="_  "+text;
       // alert(moveleft);
        $("letter").css("margin-left",moveleft=moveleft+2);
        alert(moveleft);

        textappend+="_ ";
        //textappend=textappend+"_";

    }
    for(i=0;i<girl[0].length;i++)
    {
        $("#target").text("  "+textappend+"    ");

    }
    for(i=0;i<girl[0].length;i++)
    {
        dash[i]="_";
      //  alert(dash[i]+""+i);

    }
    for(i=0;i<girl[0].length;i++)
    {
        $("#target").text(dash);
       // alert(dash[i]+""+i);
       // $("#target").css("margin-left","10px");
    }



}*/

