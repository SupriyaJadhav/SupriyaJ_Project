/**
 * Created by mindrose on 1/15/15.
 */


var myId1=0;
var cnt=0;
var myArray=[];
var obj;
var index;
var table;

function myAdd() {

    //alert(cnt);

    var name=document.getElementsByTagName("input")[1].value;
    var x = name;
    if (x==null || x=="" )
    {
        alert("Please Enter a Valid Name");
        return;
    }



    var email=document.getElementsByTagName("input")[2].value;
    var y = email;
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length)
    {
        alert("Please Enter a Valid E-mail Address");
        return;
    }



    var contact=document.getElementsByTagName("input")[3].value;
    if (/^\d{10}$/.test(contact)) {

    } else {
        alert("Please Enter a Valid Mobile Number")

        return;
    }


    var address=document.getElementsByTagName("input")[4].value;
    var z = address;
    if (z==null || z=="")
    {
        alert("Please Enter a Valid Address");
        return;
    }

    var image=document.getElementById("upload").value;






    table = document.getElementById("tId");
    var row = table.insertRow(cnt+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    obj={"name":name,"email":email,"contact":contact, "address":address,"image":"images/"+image};
    myArray[++cnt]=obj;


    cell1.innerHTML = ""+name;
    cell2.innerHTML = ""+email;
    cell3.innerHTML = ""+contact;
    cell4.innerHTML = ""+address;
    cell5.innerHTML =  "<input type=button value=EDIT onclick='editRow(this)'>";
    cell6.innerHTML = "<input type=button value=DELETE onclick='deleteRow(this)'>";




    //  myId1++;


    document.getElementById("name").value=" ";
    document.getElementById("email").value= " ";
    document.getElementById("contact").value=" ";
    document.getElementById("address").value= " ";



    document.getElementById("container1").style.visibility = "hidden";
    document.getElementById("container2").style.visibility = "visible";


}




function editRow(myId1){


    index = myId1.parentNode.parentNode.rowIndex;
    //alert(i);
    var i=index;
    //alert(myArray[i].name);
    document.getElementById("name").value= myArray[i].name;
    document.getElementById("email").value= myArray[i].email;
    document.getElementById("contact").value= myArray[i].contact;
    document.getElementById("address").value= myArray[i].address;
    document.getElementById("img").setAttribute("src",""+myArray[i].image);



    document.getElementById("container2").style.visibility = "hidden";
    document.getElementById("container1").style.visibility = "visible";
}


function deleteRow(r) {

    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tId").deleteRow(i);
}

function myUpdate()
{

    var name=document.getElementsByTagName("input")[1].value;
    var email=document.getElementsByTagName("input")[2].value;
    var contact=document.getElementsByTagName("input")[3].value;
    var address=document.getElementsByTagName("input")[4].value;
    var image=document.getElementById("upload").value;

    //alert(name);


    document.getElementById("tId").deleteRow(index);

    var row = table.insertRow(index);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    obj={"name":name,"email":email,"contact":contact, "address":address, "image":"images/"+image};
    myArray[index]=obj;


    cell1.innerHTML = ""+name;
    cell2.innerHTML = ""+email;
    cell3.innerHTML = ""+contact;
    cell4.innerHTML = ""+address;
    cell5.innerHTML =  "<input type=button value=EDIT onclick='editRow(this)'>";
    cell6.innerHTML = "<input type=button value=DELETE onclick='deleteRow(this)'>";

    document.getElementById("container1").style.visibility = "hidden";
    document.getElementById("container2").style.visibility = "visible";

    //alert("");
}

function myUpload()
{
    document.getElementById("img").setAttribute("src","images/"+document.getElementById("upload").value);
}


function myHome() {

    document.getElementById("container2").style.visibility = "hidden";
    document.getElementById("container1").style.visibility = "visible";

}


function myRecords()
{

    document.getElementById("container1").style.visibility = "hidden";
    document.getElementById("container2").style.visibility = "visible";
}

