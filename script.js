// Write your JavaScript code here!

// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {

    const form = this.document.getElementById("launchForm");

    form.addEventListener("submit", function(event) {
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");

        if (pilot.value !== "" && copilot.value !== "" && fuelLevel.value !== "" && cargoMass.value !== "") { //why wait to check for empties in formSubmission()?

            event.preventDefault();
            formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value)
        } else {
            event.preventDefault();
            alert("All fields required.");
            list.style.visibility = 'hidden';
        }

    })

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});