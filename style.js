let image=document.getElementById('images');
let images=['Images/image1.jpg','Images/image2.jpg','Images/image3.jpg','Images/image4.jpg','Images/image5.jpg','Images/image6.jpg','Images/image7.jpg','Images/image8.jpg','Images/image9.jpg','Images/image10.jpg','Images/image11.jpg','Images/image12.jpg','Images/image13.jpg'];
let i=0;
setInterval(function(){
    image.src=images[i]
    ++i;
    if(i==14){
        i=0;
    } 
},2000);
function city()
{
    let s1=document.getElementById("states").value;
    if(s1=="uttar")
    {
        var optioncities=['Lucknow','Varanasi','Prayagraj','Ayodhya','Noida'];
    }
    else{
        var optioncities=['--Select City--'];
    }
    var string="";
    // var cityvalue=document.createElement("option");
    for(j=0;j<optioncities.length;++j)
    {
        string=string+"<option value="+optioncities[j]+">"+optioncities[j]+"</option>";
    }
    document.getElementById("cities").innerHTML=string;
}

var b=document.getElementById('nav_items');   
var z=document.getElementById('openmenu'); 
function showmenu()
{
    b.style.display="block";
    z.style.display="none";
}
function hidemenu()
{
    if(z.style.display=="none"){
        z.style.display="block";
    }
    b.style.display="none";
}
