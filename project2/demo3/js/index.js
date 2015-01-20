//var arr=["MERCURY","VENUS","EARTH","MARS","JUPITER","SATURN","URANUS","NEPTUNE"];
var array="";
var i;
var flag= 0,found=0;
var str;
var match=[];
var cnt;
var complete=0;
var next=0;
var dash=[];
var arr=[];
$(document).ready(function()
{
    //alert("in ready");
    $.getJSON('index.json',function(data)
    {

        this.data=data;

        arr[next]=new Array(data[next].name.length);
        //alert(data[next].name);

    cnt=5;
    $(".c").css({"font-size":"20px"});
    for(i=0;i<data[next].name.length;i++)
    {

        dash[i]=data[next].name;
        dash[i]="-";
        $(".word").text(dash);
    }

    $(".new").click(function ()
    {
        $(".dd").hide();
        $(".won").hide();
        $(".c").text(5);
        match= [];
        dash = [];
        $(".word").text("");
        for(i=0;i<data[next].name.length;i++)
        {

            dash[i]=data[next].name;
            dash[i]="-";

            $(".word").text(dash);
        }
    });
        cnt = 5;
     //   $("text").click(function ()
       // {
        $("input").keypress(function(event)
        {

             var x=event.which || event.charCode;
             array= String.fromCharCode(x);


            //array = $(this).text();
            str = data[next].name; //arr[next];
            alert(str.length);
            for (i = 0; i < str.length; i++)
            {
                if (array == str[i])
                {
                    match[i] = array;
                    flag = 1;
                    dash[i] = match[i];
                    $(".word").text(dash);

                }

            }
            //alert(dash);
            for (i = 0; i < str.length; i++)
            {
                if (match[i] == undefined)
                {
                    complete = 0;
                    break;
                }
                else
                {
                    complete = 1;
                }
            }
            if (flag == 0)
            {
                cnt--;
                // $(".c").text("you have  "+ cnt +"  chances ");
                $(".c").text(cnt);
                $(".c").css({"font-size": "20px"});

                //alert("ops! you going wrong:  "+"your chances are:  " + cnt);
                if (cnt == 0)
                {
                    cnt = 5;
                    $(".dd").show();
                    $(".dd").text("sorry you have lost your chances:  " + "word is: " + str);
                    $(".dd").css({"color": "red", "font-size": "20px"});
                    next++;
                    match = [];
                    $("#ss").text("");
                }
            }
            if (flag == 1)
            {
                flag = 0;
            }

            if (complete == 1)
            {
                for (i = 0; i < str.length; i++)
                {

                    if (str[i] == match[i])
                    {
                        found = 1;
                    }
                    else
                    {
                        found = 0;
                        break;
                    }
                }
                if (found == 1)
                {
                    $(".won").show();
                    $(".won").text("you won");
                    $(".won").css({"font-size": "60px", "color": "green"});
                    next++;
                    match = [];
                    cnt = 5;
                    $("#ss").text("");
                }
                else
                {
                    alert('lose');
                }
            }
        });

    });
    });

