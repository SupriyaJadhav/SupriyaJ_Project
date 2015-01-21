/**
 * Created by iternia on 1/15/15.
 */


var person=[];
var cnt=0;
var obj;
var i=0;
var update=0;
var table;
var row;
var flag;
var del=1;
var addNewFocus=1;

function addData()
{



    var nameText=document.getElementById("name1").value;
    var emailText=document.getElementById("email").value;
    var contactText=document.getElementById("contact").value;
    var addrText=document.getElementById("addr").value;

    var chkBlank =blankValidation(nameText,emailText,contactText,addrText);

    if(chkBlank==true)
    {
        var chkContact=contactValidation(contactText);
        var chkEmail=emailValidation(emailText);
        if (chkContact == true && chkEmail==true)
        {
            table = document.getElementById("tableData");

            row = table.insertRow(++cnt);

            var cell1 = row.insertCell(0).innerHTML = nameText;
            var cell2 = row.insertCell(1).innerHTML = emailText;
            var cell3 = row.insertCell(2).innerHTML = contactText;
            var cell4 = row.insertCell(3).innerHTML = addrText;
            row.insertCell(4).innerHTML = "<input type='button' onclick='editRow(this)' value='Edit'>";
            row.insertCell(5).innerHTML = "<input type='button' onclick='deleteTheRow(this)' value='Delete'>";

            obj = {"name": nameText, "email": emailText, "contact": contactText, "addr": addrText};
            person[cnt] = obj;


            document.getElementById("name1").value = "";
            document.getElementById("email").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("addr").value = "";



        }
    }
    document.getElementById("data").style.visibility="visible";


}

function editRow(row_no)
{
    var x=row_no.parentNode.parentNode.rowIndex;

    update=x;
    document.getElementById("name1").value = person[x].name;
    document.getElementById("email").value =person[x].email;
    document.getElementById("contact").value = person[x].contact;
    document.getElementById("addr").value = person[x].addr;

    document.getElementById("data").style.visibility="hidden";


}


function updateData()
{
    var nameText=document.getElementById("name1").value;
    var emailText=document.getElementById("email").value;
    var contactText=document.getElementById("contact").value;
    var addrText=document.getElementById("addr").value;


    var chkBlank =blankValidation(nameText,emailText,contactText,addrText);

    if(chkBlank==true) {
        var chkContact = contactValidation(contactText);
        var chkEmail = emailValidation(emailText);
        if (chkContact == true && chkEmail == true)
        {
            document.getElementById("tableData").deleteRow(update);
            row = table.insertRow(update);


            row.insertCell(0).innerHTML = nameText;
            row.insertCell(1).innerHTML = emailText;
            row.insertCell(2).innerHTML = contactText;
            row.insertCell(3).innerHTML = addrText;
            row.insertCell(4).innerHTML = "<input type='button' onclick='editRow(this)' value='Edit'>";
            row.insertCell(5).innerHTML = "<input type='button' onclick='deleteTheRow(this)' value='Delete'>";

            document.getElementById("name1").value = "";
            document.getElementById("email").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("addr").value = "";
        }
    }
    document.getElementById("data").style.visibility="visible";

}



function deleteTheRow(del)
{

    var x=del.parentNode.parentNode.rowIndex;
    document.getElementById("tableData").deleteRow(x);

}

function setImage()
{
    var img=document.getElementById("browse").value;
    document.getElementById("setHere").setAttribute("src","Img/"+img);
}

function outOfFocus()
{


        document.getElementById("name1").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("contact").disabled = true;
        document.getElementById("addr").disabled = true;

}

function setFocus()
{
    if(addNewFocus==1)
    {

    document.getElementById("name1").disabled=false;
    document.getElementById("email").disabled=false;
    document.getElementById("contact").disabled=false;
    document.getElementById("addr").disabled=false;
        addNewFocus++;
    }
    else
    {

        document.getElementById("data").style.visibility="hidden";
    }
}


function emailValidation(emailText)
{
    var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;

    if((emailfilter.test(emailText)==false))
    {
        alert("Invalid email");
        return false;
    }
    else
        return true;
}


function contactValidation(contactText)
{
    if ((contactText.length) != 10 || isNaN(contactText))
    {
        alert("Invalid Contact");
        return false;
    }
    else
        return true;
}

function blankValidation(nameText,emailText,contactText,addrText)
{
    if(nameText=="" || emailText==""  || contactText=="" || addrText=="")

    {
        alert("Fill all the fields");
        return false;
    }
    else
        return true;
}


