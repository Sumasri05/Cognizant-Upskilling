
/* ========================= */
/* Image Double Click Event */
/* ========================= */

function enlargeImage(img){

    if(img.style.width === "300px"){

        img.style.width = "200px";
        img.style.height = "150px";
    }
    else{

        img.style.width = "300px";
        img.style.height = "250px";
    }
}

/* ========================= */
/* Event Fee Display */
/* ========================= */

function showFee(){

    let selectedEvent =
    document.getElementById("event").value;

    let feeText =
    document.getElementById("feeMessage");

    if(selectedEvent !== ""){

        feeText.innerHTML =

        "Community Members: FREE <br>" +

        "Outside Participants: ₹500";
    }
    else{

        feeText.innerHTML = "";
    }
}

/* ========================= */
/* Character Counter */
/* ========================= */

function countCharacters(){

    let text =
    document.getElementById("comments").value;

    document.getElementById("charCount")
    .innerHTML =

    "Characters: " + text.length;
}

/* ========================= */
/* Registration Form Submit */
/* ========================= */

document
.getElementById("registrationForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    document
    .getElementById("confirmationMessage")
    .innerHTML =

    "Registration Successful!";

    console.log("Registration Submitted");
});

/* ========================= */
/* Phone Validation */
/* ========================= */

function validatePhone(){

    let phone =
    document.getElementById("phone").value;

    let phonePattern =
    /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){

        alert("Enter valid 10-digit phone number");
    }
}

/* ========================= */
/* Video Ready Event */
/* ========================= */

function videoReady(){

    console.log("Video ready to play");
}

/* ========================= */
/* Load Saved Preferences */
/* ========================= */

window.onload = function(){

    console.log("Page Loaded Successfully");

    let savedEvent =
    localStorage.getItem("preferredEvent");

    if(savedEvent){

        document.getElementById("event").value =
        savedEvent;

        showFee();
    }
}

/* ========================= */
/* Save Event Preference */
/* ========================= */

document
.getElementById("event")
.addEventListener("change", function(){

    localStorage.setItem(

        "preferredEvent",

        this.value
    );

    console.log("Preference Saved");
});

/* ========================= */
/* Clear Preferences */
/* ========================= */

function clearPreferences(){

    localStorage.clear();

    sessionStorage.clear();

    document.getElementById("event").value = "";

    document.getElementById("feeMessage")
    .innerHTML = "";

    alert("Preferences Cleared");

    console.log("Storage Cleared");
}

/* ========================= */
/* Geolocation */
/* ========================= */
function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            function(position){

                let latitude =
                position.coords.latitude;

                let longitude =
                position.coords.longitude;

                document.getElementById("locationOutput")
                .innerHTML =

                "Latitude: " + latitude +
                "<br>Longitude: " + longitude;

                console.log("Location fetched successfully");
            },

            function(error){

                switch(error.code){

                    case error.PERMISSION_DENIED:

                        alert("Location permission denied");
                        break;

                    case error.POSITION_UNAVAILABLE:

                        alert("Location unavailable");
                        break;

                    case error.TIMEOUT:

                        alert("Location request timed out");
                        break;

                    default:

                        alert("Unknown error occurred");
                }
            },

            {
                enableHighAccuracy:true,
                timeout:20000,
                maximumAge:0
            }
        );

    }
    else{

        alert("Geolocation is not supported");
    }
}
/* ========================= */
/* Before Page Exit Warning */
/* ========================= */

window.onbeforeunload = function(){

    let nameField =
    document.getElementById("name").value;

    if(nameField !== ""){

        return "Are you sure you want to leave?";
    }
}