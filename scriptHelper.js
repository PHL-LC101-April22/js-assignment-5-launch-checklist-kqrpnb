// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let targetDIV = document.getElementById("missionTarget")
    targetDIV.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `
}

function validateInput(testInput) {
    //if testInput is empty, return "Empty"
    // console.log(testInput);
    if (testInput === undefined || testInput === "") {
        return "Empty";
    };

    //if testInput is NaN, return "Not a Number"
    if (isNaN(testInput)) {
        return "Not a Number";
    }

    //if TestInput is !Nan, return "Is a Number"
    if (Number(testInput)) {
        return "Is a Number";
    }

    return "Something really done broke";
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    // let form = document.querySelector("launchForm");

    let pilotLI = document.getElementById("pilotStatus");
    let copilotLI = document.getElementById("copilotStatus");
    let fuelLI = document.getElementById("fuelStatus");
    let cargoLI = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    
    let readyStatus = {
        pilotReady: false,
        copilotReady: false,
        fuelReady: false,
        cargoReady: false,
        status: false,
        confirm: function() {
            let faults = [];

            if (this.pilotReady === true) {
                this.status = true;
            } else {
                // console.log('faults.push');
                faults.push('Pilot');
                this.status = false;
            }

            if (this.copilotReady === true) {
                this.status = true;
            } else {
                faults.push('Copilot');
                this.status = false;
            }

            if (this.fuelReady === true) {
                this.status = true;
            } else {
                faults.push('Fuel');
                this.status = false;
            }
            
            if (this.cargoReady === true) {
                this.status = true;
            } else {
                faults.push('Cargo');
                this.status = false;
            }
            return faults;
        }
    };

    // console.log(validateInput(pilot));
    // console.log(validateInput(copilot));
    // console.log(validateInput(fuelLevel));
    // console.log(Number(fuelLevel));
    // console.log(validateInput(cargoMass));
    // console.log(Number(cargoMass));

    // if/else sets alert = message, then give alert outside of if else
    //check for perfect condition, then use else to add what's wrong to an alert array
    //then print out array

    if (validateInput(pilot) === "Not a Number") {
        readyStatus.pilotReady = true;
        pilotLI.style.color = '';
    } else {
        readyStatus.pilotReady = false;
        pilotLI.style.color = 'red';
    }
    if (validateInput(copilot) === "Not a Number") {
        readyStatus.copilotReady = true;
        copilotLI.style.color = '';
    } else {
        readyStatus.copilotReady = false;
        copilotLI.style.color = 'red';
    }

    if (validateInput(fuelLevel) === "Is a Number") {
        if (Number(fuelLevel) < 10000) {
            readyStatus.fuelReady = false;
            fuelLI.style.color = 'red';
        } else {
            readyStatus.fuelReady = true;
            fuelLI.style.color = '';
        }
    }
    if (validateInput(cargoMass) === "Is a Number") {
        if (Number(cargoMass) > 10000) {
            readyStatus.cargoReady = false;
            cargoLI.style.color = 'red';
        } else {
            readyStatus.cargoReady = true;
        }
    }

    let alerts = readyStatus.confirm();
    for (let i = 0; i < alerts.length; i++) {
        console.log(alerts[i]);
    }
    // console.log(alerts);

    if (alerts.length === 0) {
        // readyStatus.status = true;
        list.style.visibility = 'hidden';
        launchStatus.style.color = 'green';
        launchStatus.innerHTML = 'Shuttle is ready for launch!'

        let throwAlert = function() {
            let 
        }

    } else {
        let message = 'Make sure to enter valid information and quantities for each field.';
        let arr = [];
        for (let k = 0; k < alerts.length; k++) {
            arr = message.split();
            arr.push(alerts[k]);
            message = arr.join('\n');
        }
        alert(message);
        // throwAlert();        
        list.style.visibility = 'visible';
        pilotLI.innerHTML = `Pilot ready: ${readyStatus.pilotReady}`;
        copilotLI.innerHTML = `Copilot ready: ${readyStatus.copilotReady}`;
        fuelLI.innerHTML = `Fuel level high enough for launch: ${readyStatus.fuelReady}`;
        cargoLI.innerHTML = `Cargo mass low enough for launch: ${readyStatus.cargoReady}`;
    }

    // if (pilotReady === true && copilotReady === true && fuelReady === true && cargoReady === true) {
    //     statusColor = 'green';
    //     readyStatus = true;
    //     pilotLI.innerHTML = 'Pilot ${pilot} is ready.';
    //     copilotLI.innerHTML = 'Copilot ${copilot} is ready.'
    // }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function sdRndInteger(min, max) {
    return Math.round(Math.random() * (max - min) ) + min;
  }

function pickPlanet(planets) {
    return planets[sdRndInteger(0, planets.length)];
    // return Math.round(Math.random()*10);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
