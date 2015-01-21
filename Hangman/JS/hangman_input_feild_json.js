//using JSON
//var text=[{"name":"PIYA"},{"name":"AMARJA"},{"name":"ADISHRI"},{"name":"NIKHIL"},{"name":"KIRAN"},{"name":"KAUSHIK"},];


//var girl=['PIYA','AMARJA','ADISHRI','NIKHIL','RAVI','KAUSHIK','KIRAN'];
var dash=new Array(10);
var i=0;
var flag=0;
//var newChar=new Array(10);

var  r_no=Math.floor((Math.random()*6)+0);
var randomText=r_no;
//alert(text(r_no).value());
//alert(text[r_no].name);
//var len=text[r_no].name.length;
//alert(len);
//var newChar=new Array(len);

//var flag=0;
var attempt=0;
var cnt=0;
var WON=0;
var LOSE=0;
var newChar=[];
var data;
$(document).ready(function() {
    //alert("hi");
    $("#input_data").val("");
$("#input_data").focus();
    $.getJSON("JS/hangman_JSON.json", function (data) {
        // alert(data[r_no].name);
        // alert(data[r_no].name.length);
        //alert("hello");
        this.data=data;

        newChar=new Array(data[r_no].name.length);
//alert(newChar.length);
        // var obj = JSON.parse(text);
        // document.getElementById("target").innerHTML =
        // text[r_no].name;
        // alert(obj.name);/*
//var id=$("#input_data");


        //$(".container-fluid button").prop('disabled',false);
        for(i=0;i<newChar.length;i++)
        {
            newChar[i]="_";
           $("#target").text(""+newChar);
            //id.val=newChar;
           // alert();
        }

        $("input").keypress(function(e)
        {
         //   alert(e.which);
            if(( e.charCode < 65 || e.charCode > 90) &&(e.charCode!=0)) {
                alert("Please enter CAPITAL Character ONLY");



            }
            else
            {
                var chara;
                chara = String.fromCharCode(e.charCode);
                //  var chara=$(this).text();
                randomText = data[r_no].name;
               //  alert(chara);
                for (i = 0; i < newChar.length; i++) {
                    if (chara == randomText[i]) {

                        newChar[i] = chara;
                        $("#target").text(newChar);
                        flag = 1;
                        cnt = cnt + 1;
                    }
                }
                if (flag == 0) {
                    //alert("character not found");
                    //   $(this).css("background-color","red");

                    attempt++;

                }
                if (attempt == 5) {
                    LOSE++;
                    //alert("Your attempts are over,You lose the game");
                    //$("#target").css("visibility","hidden");
                    $("#footer").text("You lose game,Word is" + randomText);
                    // $("#target").text("  ");
                    $(".container-fluid button").prop('disabled', true);
                    $("#lose").text(LOSE);
                }

                if (flag == 1) {
                    //alert("character found");
                    // $(this).css("background-color","green");
                    chara.fontcolor("red");
                    flag = 0;
                }
                if (cnt == newChar.length) {
                    // alert("You won the game,word found");
                    WON++;
                    $("#footer").text("You won,Word is" + randomText);
                    $(".container-fluid button").prop('disabled', true);
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

           }
        });
    });
});


function reload()
{
    // alert(newChar);
    //var girl=['PIYA','AMARJA','ADISHRI','NIKHIL','RAVI','KAUSHIK','KIRAN'];
    var i=0;
    var flag=0;
    $("#input_data").val("");
    r_no=Math.floor((Math.random()*6)+0);
    // randomText=girl[r_no];
//alert(randomText);
    //  len=randomText.length;
//alert(len);
    $("#input_data").focus();
    $.getJSON("JS/hangman_JSON.json", function (data){
        // alert(data[r_no].name);





        newChar=new Array(data[r_no].name.length);
        // alert(newChar.length);

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
    });

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

