let bezoeker = {
    naam : prompt("Wat is je voornaam?"),
    leeftijd : prompt("Wat is je leeftijd?")
};

alert("Welkom"+" "+bezoeker["naam"] +"!");
console.log(bezoeker);

let voornaamElement = document.querySelector('#naam');
naamElement.innerHTML = bezoeker.naam;
//BGcolours
if (bezoeker["leeftijd"]=18) {
    document.querySelector("body").style.backgroundColor = "lightgreen";
}