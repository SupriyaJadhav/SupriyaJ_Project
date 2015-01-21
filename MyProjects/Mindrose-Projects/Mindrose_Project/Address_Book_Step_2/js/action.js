/**
 * Created by mindrose on 1/13/2015.
 */
var table = document.getElementById("recordTable");
var data=[];
var cnt=0;
var pos,invalidEmail=0,invalidContact=0;
var deleted=0;
function saveData()
{


    document.getElementById("saveBtn").style.visibility="hidden";
    table = document.getElementById("recordTable");
    var name=document.getElementsByTagName("input")[1].value;
    var email=document.getElementsByTagName("input")[2].value;
    var contact=document.getElementsByTagName("input")[3].value;
    var address=document.getElementsByTagName("input")[4].value;
    var image=document.getElementById("image").value;

    var isChrome = !!window.chrome;
    if(isChrome)
    {
        var imgArr=image.split("\\");
        image=imgArr[imgArr.length-1];

    }

    if(name=="" || email=="" || contact=="" || address=="")
    {
        document.getElementById("message").innerHTML="Warning:Fill all Fields";

    }
    else if(invalidEmail==0 || invalidContact==0)
    {
        document.getElementById("message").innerHTML="Warning:Something is wrong.Record will not save.";

    }
    else {
        document.getElementById("message").innerHTML="";
        var obj = {
            "name": "" + name,
            "email": "" + email,
            "contact": "" + contact,
            "address": "" + address,
            "id": "" + cnt,
            "image": "images/" + image
        };
        data[cnt] = obj;


// Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(cnt + 1);

        row.insertCell(0).innerHTML = "" + name;
        row.insertCell(1).innerHTML = "" + email;
        row.insertCell(2).innerHTML = "" + contact;
        row.insertCell(3).innerHTML = "" + address;

        add(row.insertCell(4), "button", "Edit", "Edit('edit_" + (this.cnt) + "')", "edit_" + (cnt));
        add(row.insertCell(5), "button", "Delete", "Delete('delete_" + (this.cnt) + "')", "delete_" + (cnt));

        document.getElementById("formDiv").style.visibility="hidden";
        document.getElementById("recordGrid").style.visibility="visible";
        cnt++;
    }
 }
function add(cell,type,value,methodName,id) {


    var element = document.createElement("input");

    element.setAttribute("type", type);
    element.setAttribute("value", value);
    element.setAttribute("name", value);
    element.setAttribute("id", id);
    element.setAttribute("onclick",""+methodName);

    cell.appendChild(element);

}
function Edit(pos)
{
    /* Form is visible*/
    document.getElementById("formDiv").style.visibility="visible";
    document.getElementById("recordGrid").style.visibility="hidden";

    document.getElementById("updateBtn").style.visibility="visible";
    document.getElementById("saveBtn").style.visibility="hidden";

    var get=document.getElementsByTagName("input");
    var tot=[];
    tot=pos.split("_");
    pos=tot[1];
    this.pos=pos;


    get[1].value=data[pos].name;
    get[2].value=data[pos].email;
    get[3].value=data[pos].contact;
    get[4].value=data[pos].address;

    document.getElementById("profile").setAttribute("src",""+data[pos].image);

}
function Delete(pos)
{
    if(cnt>0) {
        cnt--;
    }
        var tot=[];
    tot=pos.split("_");
    pos=(tot[1]*1);


    var i=0;
    var tableRows=parseInt(table.rows.length);

    for(i=1;i<=data.length;i++) {

        if(parseInt(data[i-1].id)==parseInt(pos)) {

            if(tableRows>i)
                document.getElementById("recordTable").deleteRow(i);
            else
                document.getElementById("recordTable").deleteRow(1);

        }
    }
}
function add_New(){
    document.getElementById("formDiv").style.visibility="visible";
    document.getElementById("recordGrid").style.visibility="hidden";

    document.getElementById("updateBtn").style.visibility="hidden";
    document.getElementById("saveBtn").style.visibility="visible";

    document.getElementsByTagName("input")[1].value="";
    document.getElementsByTagName("input")[2].value="";
    document.getElementsByTagName("input")[3].value="";
    document.getElementsByTagName("input")[4].value="";
    document.getElementById("profile").setAttribute("src","images/default.jpg");
    document.getElementById("image").value="";
}
function updateData(){



    document.getElementById("updateBtn").style.visibility="hidden";
    document.getElementById("saveBtn").style.visibility="hidden";

    var name=document.getElementsByTagName("input")[1].value;
    var email=document.getElementsByTagName("input")[2].value;
    var contact=document.getElementsByTagName("input")[3].value;
    var address=document.getElementsByTagName("input")[4].value;
    var image=document.getElementById("image").value;

    if(name=="" || email=="" || contact=="" || address=="")
    {
        document.getElementById("message").innerHTML="Warning:Fill all Fields";

    }
    else if(invalidEmail==0 || invalidContact==0)
    {
        document.getElementById("message").innerHTML="Warning:Something is wrong.Record will not save.";

    }
    else {
        document.getElementById("formDiv").style.visibility="hidden";
        document.getElementById("recordGrid").style.visibility="visible";



        var i = 0;

        for (i = 1; i <= data.length; i++) {

            if (parseInt(data[i - 1].id) == parseInt(pos)) {

                document.getElementById("recordTable").deleteRow(i);
                break;
            }
        }
        //delete data[i-1];

        var obj = {
            "name": "" + name,
            "email": "" + email,
            "contact": "" + contact,
            "address": "" + address,
            "id":+(i-1),
                "image": "images/" + image
        };
        data[i - 1] = obj;


        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = "" + name;
        row.insertCell(1).innerHTML = "" + email;
        row.insertCell(2).innerHTML = "" + contact;
        row.insertCell(3).innerHTML = "" + address;

        add(row.insertCell(4), "button", "Edit", "Edit('edit_" + (i - 1) + "')", "edit_" + (i - 1));
        add(row.insertCell(5), "button", "Delete", "Delete('delete_" + (i - 1 ) + "')", "delete_" + (i - 1));

        document.getElementById("profile").setAttribute("src", "images/" + image);
    }
}
function changeDP(){

    var image=document.getElementById("image").value;
  //  alert(document.getElementById("image").value);
    var isChrome = !!window.chrome;
    if(isChrome)
    {
        var imgArr=image.split("\\");
        image=imgArr[imgArr.length-1];

    }

    document.getElementById("profile").setAttribute("src","images/"+image);
}
function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat))
    {
        invalidEmail=1;
        document.getElementById("email").blur();                    //focus is out
        return true;
    }
    else
    {
        invalidEmail=0;
        document.getElementById("message").innerHTML="Warning:Invalid Email.";
        document.getElementById("email").focus();                   //in focus
        return false;
    }
}
function validateContact(inputText)
{
    if(inputText.length==10 && !(isNaN(inputText)))
    {
        invalidContact=1;
        document.getElementById("message").innerHTML="";

        document.getElementById("contact").blur();                    //focus is out
        return true;
    }
    else
    {
        invalidContact=0;
        document.getElementById("message").innerHTML="Warning:Invalid Contact Number";

     document.getElementById("contact").focus();                   //in focus
     return false;
    }
}
function validateText(inputText)
{
    if(!(isNaN(inputText)))
    {
        document.getElementById("message").innerHTML="Enter Text";
    }
    else
        document.getElementById("message").innerHTML="";

}
function view_Record()
{
    /* Firefox */
  //  var isFirefox = typeof InstallTrigger !== 'undefined';
    /*chrome */

    document.getElementById("formDiv").style.visibility="hidden";
    document.getElementById("recordGrid").style.visibility="visible";
    document.getElementById("updateBtn").style.visibility="hidden";
    document.getElementById("saveBtn").style.visibility="hidden";

}