let nameSurnameInput = document.getElementById("nameSurname");
let kmNeededInput = document.getElementById("kmNeeded");
let ageInput = document.getElementById("age");


document.getElementById("generatesButton").addEventListener("click", function(){
    let age = ageInput.value;
    let kmNeeded = kmNeededInput.value;
    const kmPrice = 0.21;
    let ticketPrice = kmNeeded * kmPrice;
    

});