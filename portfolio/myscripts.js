let bezoeker = {
    naam : prompt("Wat is je voornaam?"),
    leeftijd : prompt("Wat is je leeftijd?")
};
alert("Welkom"+" "+bezoeker["naam"] +"!");

//object bezoeker in consolelog
console.log(bezoeker);

//naam tonen op pagina
let naamElement = document.querySelector('#naam');
naamElement.innerHTML = bezoeker.naam;

//BGcolours
if (bezoeker["leeftijd"]=18) {
    document.querySelector("body").style.backgroundColor = "lightgreen";
}
if (bezoeker["leeftijd"]>18) {
    document.querySelector("body").style.backgroundColor = "red";
}