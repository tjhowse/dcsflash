if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","data.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

document.getElementById("unit").innerHTML=
xmlDoc.getElementsByTagName("NATODesignation")[0].childNodes[0].nodeValue;
document.getElementById("name").innerHTML=
xmlDoc.getElementsByTagName("NATOName")[0].childNodes[0].nodeValue;
document.getElementById("range").innerHTML=
xmlDoc.getElementsByTagName("RussianDesignation")[0].childNodes[0].nodeValue;
msgbox("Test")