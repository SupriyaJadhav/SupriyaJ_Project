/**
 * Created by anomit on 1/13/15.
 */
var name,email,contact,addr,imagevar, i,cnt = 0,editrow,deleterow,del;
var details;
var table;
var totalRows= 0,rowno;

var upname,upcontact,upaddr,upemail,upimg;

var details=[];
var obj;

function addDetails(){

    name = document.getElementById("name").value;
    email =document.getElementById("email").value;
    contact =document.getElementById("contact").value;
    addr = document.getElementById("address").value;
    editrow = document.getElementById("edit").value = "Edit";
    deleterow = document.getElementById("delete").value = "Delete";
    imagevar = document.getElementById("imagefile").value;

    /*$.getJSON('addrbook.json',function(details) {
        alert(" ");
        document.getElementById("contact").innerHTML = details.email;
    });*/

    var validation = checkValidation(name,email,contact,addr);

    if(validation == true)
    {
        var mailval =   emailvalidation(email);
        var conval =   convalidation(contact);

        if(mailval == true && conval == true)
        {
            table = document.getElementById("detailtable");
            var row = table.insertRow(++cnt);
            //row.setAttribute('onclick','deleteDataFunc(this);');
            var editelement  = document.createElement('a');
            var deleteelement  = document.createElement('a');

            editelement.setAttribute("src","#");
            editelement.setAttribute("id","editdata");
            editelement.setAttribute("onclick","editDataFunc(this)");
            editelement.style.cursor = "pointer";
            var x= document.createTextNode("Edit");
            editelement.appendChild(x);

            deleteelement.setAttribute("src","#");
            deleteelement.setAttribute("id","deletedata");
            deleteelement.setAttribute("onclick","deleteDataFunc(this)");
            deleteelement.style.cursor = "pointer";
            var y= document.createTextNode("Delete");
            deleteelement.appendChild(y);

            /*you ca use as=>row.insertCell(4).innerHTML = "<a href = "#"----->";*/

            row.insertCell(0).innerHTML = name;
            row.insertCell(1).innerHTML = email;
            row.insertCell(2).innerHTML = contact;
            row.insertCell(3).innerHTML = addr;
            //row.insertCell(4).innerHTML = editrow+"/"+deleterow;
            row.insertCell(4).appendChild(editelement);
            row.insertCell(5).appendChild(deleteelement);


            obj = {"name":name,"email":email,"contact":contact,"address":addr,"image":"images/"+imagevar};
            details[cnt] =obj;
         //   alert(""+row.insertCell(0).innerHTML);

            alert("Added Successfuly");

            document.getElementById("divtable").style.visibility = "visible";

            document.getElementById("divform").style.visibility = "hidden";



        }

    }
    else{
        document.getElementById("divform").style.visibility = "visible";
        alert("Please fill all fields.");

    }

}

function addNew(){

    document.getElementById("divform").style.visibility = "visible";
    document.getElementById("divtable").style.visibility = "hidden";

    document.getElementById("name").value= '';
    document.getElementById("email").value= '';
    document.getElementById("contact").value= '';
    document.getElementById("address").value= '';
    document.getElementById("img").setAttribute("src",'images/girl.jpg');

}


function deleteDataFunc(rowis){

    del = rowis.parentNode.parentNode.rowIndex;

    document.getElementById("detailtable").deleteRow(del);

    document.getElementById("name").value= '';
    document.getElementById("email").value= '';
    document.getElementById("contact").value= '';
    document.getElementById("address").value= '';
    document.getElementById("img").setAttribute("src",'images/girl.jpg');

}


function editDataFunc(rowis)
{
    document.getElementById("divform").style.visibility = "visible";
    document.getElementById("divtable").style.visibility = "hidden";

    rowno  = rowis.parentNode.parentNode.rowIndex;

    document.getElementById("name").value = details[rowno].name;
    document.getElementById("email").value = details[rowno].email;
    document.getElementById("contact").value = details[rowno].contact;
    document.getElementById("address").value = details[rowno].address;
    document.getElementById("img").setAttribute("src",''+details[rowno].image);
}

function updateDetails()
{
    upname = document.getElementById("name").value;
    upemail = document.getElementById("email").value;
    upcontact = document.getElementById("contact").value;
    upaddr = document.getElementById("address").value;
    upimg = document.getElementById("imagefile").value;

    var validation = checkValidation(upname,upemail,upcontact,upaddr);


    if(validation == true)
    {
        var conval =   convalidation(contact);
        var mailval =   emailvalidation(email);

        if(mailval == true && conval == true)
        {
            document.getElementById("detailtable").rows[rowno].cells[0].innerHTML = upname;
            document.getElementById("detailtable").rows[rowno].cells[1].innerHTML = upemail;
            document.getElementById("detailtable").rows[rowno].cells[2].innerHTML = upcontact;
            document.getElementById("detailtable").rows[rowno].cells[3].innerHTML = upaddr;
            document.getElementById("img").setAttribute("src", "images/" + upimg);


            details[rowno].name = upname;
            details[rowno].email = upemail;
            details[rowno].contact = upcontact;
            details[rowno].address = upaddr;
            details[rowno].image = "images/" + upimg;

            alert("Updated Successfuly");

            document.getElementById("divtable").style.visibility = "visible";
            document.getElementById("divform").style.visibility = "hidden";

        }


    }
    else
    {
        document.getElementById("divform").style.visibility = "visible";
        alert("Please fill all fields.");
    }

}

function imageFunction(){
    document.getElementById("img").setAttribute("src","images/"+document.getElementById("imagefile").value);
}

function checkValidation(name,email,contact,addr)
{

    if(name != "" && email != "" && contact != "" && addr != "")
    {
       // alert("Valid");
        return true;

    }
    else
    {
       // alert("Invalid");
        return false;

    }

}
function convalidation(conval){

    var con = document.getElementById("contact");

    if (isNaN(con.value)) {
        alert("The phone number contains illegal characters.");
        con.value = "";
        con.focus();
        return false;
    }
    else if(con.value.length != 10)
    {
        alert("The phone number is the wrong length. \nPlease enter 10 digit mobile no.");
        con.value = "";
        con.focus();
        return false;
    }
    else
    return true;

}

function emailvalidation(mailval)
{
    var mail = document.getElementById("email");
    var mailstr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!mailstr.test(mail.value)) {
        alert('Please provide a valid email address');
        mail.value = "";
        mail.focus;
        return false;
    }
    else
    return true;
}


