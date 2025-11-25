console.log("Hello from app.js");

const buttonClicked = document.getElementById("new-fact-btn");

buttonClicked.addEventListener("click", function (event)  {
//Här skriver vi vad som ska hända när knappen klickas
//Vi anropar funktionen för att hämta kattfakta
getRandomCatFacts();
//Vi anropar funktionen för att hämta hundfakta
getRandomDogFacts();
//Vi anropar funktionen för att hämta KanyeQuotes
getKanyeQuotes();
//Vi anropar en funktion,när man klickar på knappen så ska den "blinka" så att man ser om man klickar eller ej.
buttonAnimation();

});

//kattfakta-funktion
function getRandomCatFacts() {

    fetch("https://catfact.ninja/fact")
       .then(function (response) {
              return response.json();
       })
         .then((response) => {
            let cat = response;
            console.log(cat);
            document.querySelector(".catFact").innerHTML = "🐱 " + cat.fact;
         })
         .catch(function (error) {
 console.log("Error: " + error);
 document.querySelector(".catFact").innerHTML = "🐱 kan inte hitta någon kattfakta just nu, sorry.";
})

}

//Hundfakta-funktion

function getRandomDogFacts() {

fetch("https://dogapi.dog/api/v2/facts")
   .then(function (response) {
          return response.json();
   })
     .then((response) => {
        let dog = response;
        console.log(dog);
        document.querySelector(".dogFact").innerHTML = "🐶 " + dog.data[0].attributes.body;
     })
.catch(function (error) {
 console.log("Error: " + error);
 document.querySelector(".dogFact").innerHTML = "🐶 kan inte hitta någon hundfakta just nu, sorry.";
})

}

//KanyeQuotes-funktion

function getKanyeQuotes() {

fetch("https://api.kanye.rest")
   .then(function (response) {
          return response.json();
   })
     .then((response) => {
        let dataK = response;
        console.log(dataK);
        document.querySelector(".kanyeQuote").innerHTML = "🎤 " + dataK.quote;
     })
.catch(function (error) {
 console.log("Error: " + error);
 document.querySelector(".kanyeQuote").innerHTML = "🎤 kan inte hitta något Kanye-citat just nu, sorry.";
})
}

//Button animation-funktion

function buttonAnimation() {
    let activeButton = document.querySelector("#new-fact-btn");
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}
