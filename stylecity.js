function city() {
    let s1 = document.getElementById("states").value;
    //using switch for cities drop-down
    switch (s1) {
      case "uttar":
        optioncities = [
          "--Select City--",
          "Lucknow",
          "Varanasi",
          "Prayagraj",
          "Ayodhya",
          "Noida",
        ];
        break;
      case "rajasthan":
        optioncities = [
          "--Select City--",
          "Jodhpur",
          "Udaipur",
          "Jaisalmer",
          "Jaipur",
          "Bikaner",
        ];
        break;
      case "andhra":
        optioncities = [
          "--Select City--",
          "Tirupati",
          "Vizag",
          "Vijayawada",
          "Kurnool",
          "Kakinada",
        ];
        break;
      case "arunachal":
        optioncities = [
          "--Select City--",
          "Tawang",
          "Itanagar",
          "Ziro",
          "Bomdila",
          "Pasighat",
        ];
        break;
      case "assam":
        optioncities = [
          "--Select City--",
          "Guwahati",
          "Silchar",
          "Dibrugarh",
          "Jorhat",
          "Dibrugarh",
        ];
        break;
      case "bihar":
        optioncities = [
          "--Select City--",
          "Patna",
          "Bodhgaya",
          "Gaya",
          "Champaran",
          "Munger",
        ];
        break;
      case "chhattishgarh":
        optioncities = [
          "--Select City--",
          "Raipur",
          "Bhilai ",
          "Bilaspur",
          "Korba",
          "Rajnandgaon",
        ];
        break;
      case "goa":
        optioncities = [
          "--Select City--",
          "Panaji",
          "Panaji",
          "Calangute",
          "Mapusa",
          "Margao",
        ];
        break;
      case "gujarat":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "haryana":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "himachal":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "jammu":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "jharkhand":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "karnataka":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "kerala":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "madhya":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "maharashtra":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "manipur":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "meghalaya":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "mizoram":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "nagaland":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "odisha":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "punjab":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "sikkim":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "tamil":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "telangana":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "tripura":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "uttarakhand":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
      case "west":
        optioncities = ["--Select City--", "", "", "", "", ""];
        break;
    }
  
    var string = "";
    // var cityvalue = document.createElement("option");
    for (j = 0; j < optioncities.length; ++j) {
      string =
        string +
        "<option value=" +
        optioncities[j] +
        "onclick=load(value)>" +
        optioncities[j] +
        "</option>";
    }
    document.getElementById("cities").innerHTML = string;
  }
  
  function load(){
    var select = document.getElementById('cities');
      var s = select.options[select.selectedIndex].text;
    switch (s) {
      case "Lucknow":
        location.href='lucknow.html'
        break;
      case "Varanasi":
        location.href='varanasi.html'
        break;
      case "Prayagraj":
        location.href='prayagraj.html'
        break;
      case "Ayodhya":
        location.href='ayodhya.html'
        break;
      case "Noida":
        location.href='noida.html'
        break;
    }
      load();
  }
  var b = document.getElementById("nav_items");
  var z = document.getElementById("openmenu");
  function showmenu() {
    b.style.display = "block";
    z.style.display = "none";
  }
  function hidemenu() {
    if (z.style.display == "none") {
      z.style.display = "block";
    }
    b.style.display = "none";
  }
  