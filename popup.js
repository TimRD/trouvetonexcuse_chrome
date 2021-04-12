function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'excuses.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    
    // .open will NOT return a value but simply returns undefined in async mode so use a callback
    callback(xobj.responseText);
    
    }
  }
  xobj.send(null);
  
}

  // Call to function with anonymous callback
loadJSON(function(response) {
  // Do Something with the response e.g.
  jsonresponse = JSON.parse(response);
  intercours = jsonresponse.intercours[Math.floor((Math.random() * jsonresponse.intercours.length))]; 
  document.getElementById("ExcuseText").innerHTML = "Excusez moi, " + intercours.text;
  //alert(intercours.text);
  
});

