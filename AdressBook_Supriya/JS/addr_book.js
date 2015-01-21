/**
 * Created by iternia on 1/13/15.
 */
var person=[];
var cnt=0;
var obj;
var i=0;
var update=0;
var table;
var row;
var flag;

function addData()
{



   var nameText=document.getElementById("name1").value;
    var emailText=document.getElementById("email").value;
    var contactText=document.getElementById("contact").value;
    var addrText=document.getElementById("addr").value;

   // alert(searchContact);


    if((nameText!=" " || emailText!=" " ) && (contactText!=" " || addrText!=" "))
    {


         table = document.getElementById("tableData");

         row = table.insertRow(++cnt);

        var cell1 = row.insertCell(0).innerHTML = nameText;
        var cell2 = row.insertCell(1).innerHTML = emailText;
        var cell3 = row.insertCell(2).innerHTML = contactText;
        var cell4 = row.insertCell(3).innerHTML = addrText;

 obj={"name":nameText,"email":emailText,"contact":contactText,"addr":addrText};
        person[cnt]=obj;
        //person[0] = nameText;
       // person[1] = emailText;
       // person[2] = contactText;
     //   person[3] = addrText;
        // //for(i=0;i<4;i++)
        // {
       // alert(person[cnt].name);
        // }

        document.getElementById("name1").value = " ";
        document.getElementById("email").value = " ";
        document.getElementById("contact").value = " ";
        document.getElementById("addr").value = " ";

       // outOfFocus();
    }
    else
    {
        alert("Please enter all fields");
    }

}

function editRow()
{
     flag=0;

    var searchContact=document.getElementById("search").value;
    alert(searchContact);
    alert(parseInt(searchContact)+"after parsing");
    alert(cnt+"cnt");

    for(i=1;i<=cnt;i++)
    {   alert(person[i].contact);
        alert(parseInt(person[i].contact)+"after parsing");
        var con=person[i].contact;
        if(con  === searchContact)
        {   flag=1;

            alert("found contact");
            alert(person[i].name);
            alert(person[i].email);
            alert(person[i].contact);
            alert(person[i].addr);
            update=i;
            document.getElementById("name1").value=person[i].name;
            document.getElementById("email").value=person[i].email;
            document.getElementById("contact").value=person[i].contact;
            document.getElementById("addr").value=person[i].addr;
            alert("values are inside");

        }
    }
    if(flag==0)
    {
        alert("Recornd not found");
    }

}


function updateData()
{



    var nameText=document.getElementById("name1").value;
    var emailText=document.getElementById("email").value;
    var contactText=document.getElementById("contact").value;
    var addrText=document.getElementById("addr").value;
    alert(addrText);

    document.getElementById("tableData").deleteRow(update);
    row = table.insertRow(update);



    row.insertCell(0).innerHTML = nameText;
    row.insertCell(1).innerHTML = emailText;
    row.insertCell(2).innerHTML = contactText;
    row.insertCell(3).innerHTML = addrText;

    document.getElementById("name1").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("contact").value = " ";
    document.getElementById("addr").value = " ";


}



function deleteRow()
{ alert("in delete function");


    var searchContact=document.getElementById("search").value;
    alert(parseInt(searchContact)+"after parsing");

alert(cnt);
    for(i=1;i<=cnt;i++)
    {
        alert(parseInt(person[i].contact)+"after parsing");
        var con = person[i].contact;
        alert("con is"+con);
        if (con == searchContact)
        {
            flag = 1;
            alert("found contact");
            document.getElementById("tableData").deleteRow(i);
            alert(i+"th row deleted");

        }
    }
    if(flag==0)
    {
        alert("Recornd not found");

    }




}






function outOfFocus()
{
    document.getElementById("name1").disabled=true;
    document.getElementById("email").disabled=true;
    document.getElementById("contact").disabled=true;
    document.getElementById("addr").disabled=true;
}

function setFocus()
{
    document.getElementById("name1").disabled=false;
    document.getElementById("email").disabled=false;
    document.getElementById("contact").disabled=false;
    document.getElementById("addr").disabled=false;
}
