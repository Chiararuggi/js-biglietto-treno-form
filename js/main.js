let nameSurnameInput = document.getElementById("nameSurname");
let kmNeededInput = document.getElementById("kmNeeded");
let ageInput = document.getElementById("age");


document.getElementById("generatesButton").addEventListener("click", function(){
    let age = ageInput.value;
    let kmNeeded = kmNeededInput.value;
    const kmPrice = 0.21;
    let ticketPrice = kmNeeded * kmPrice;
    console.log(ticketPrice)

    if (age >= 65){
        const newPrice= ticketPrice - (ticketPrice * 0.4);
        console.log(newPrice)
    }

    if (age < 18){
        const newPrice= ticketPrice - (ticketPrice * 0.2);
        console.log(newPrice)
    }
});