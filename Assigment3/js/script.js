// The Constructor for the Pizza Object
function Pizza (pizzaSize, crustType, cheeseType, pizzaToppings) {
    // The Object members
    this.pizzaSize = pizzaSize;
    this.pizzaToppings = pizzaToppings;
    this.cheeseType = cheeseType;
    this.crustType = crustType;
    
    this.summary = function () {
        return  `You have succesfully ordered a ${this.pizzaSize} ${this.crustType} pizza, made with ${this.cheeseType} and topped with ${this.pizzaToppings}!`;
    }
}


function validCheck() {
    let checkboxChecked = false;

    for(let i = 0; i < 10; i++) {
        let topSelected = `#topping${i + 1}`;
        console.log("top selected")

        let toppingOption = document.querySelector(topSelected);
        console.log("topping selected")
        if (toppingOption.checked) {
            checkboxChecked = true;
            break;
        }
    }
    if(checkboxChecked == true) {
        return true;
    } else{
        alert("The Pizza's toppings were not selected");
        console.log("top not selected")
        return false;
    }

}
// This below will check through just to make sure all inputs for the pizza will filled in
function checkIfEmpty() {
    if(pizzaSizeSelect.value == "") {
        alert('The Pizza size was not selected');
        return false;
    }
    if(cheeseTypeSelect.value == "") {
        alert('The Cheese type was not selected');
        return false;
    }
    if(pizzaSizeSelect.value == "") {
        alert('The Pizza size was not selected');
        return false;
    }
    // If all pizza values were properly put in, then return as true
    return true;
}

// The Variables that'll store the form elements
const pizzaSizeSelect = document.querySelector('#size');
const crustTypeSelect = document.querySelector('#crustType');
const cheeseTypeSelect = document.querySelector('#cheeseType');
// Variables here are for the text to be added into the p elements
const studentID = document.querySelector('#myStudentId');
const deliveryOutput = document.querySelector('#deliveryOutput');
const submitOrder = document.querySelector('#order')

// Event listener for when the user presses 'Order'
submitOrder.addEventListener('click', function(event) {

    if(validCheck() && checkIfEmpty() ) {
        studentId.textContent = "Owen DeHaan | ID: 1189401";
        console.log("in function")
        // This will set the pizza options' values to whatever the user inputted
        let pizzaSize = pizzaSizeSelect.value;
        console.log("Pizza size value set")
        let crustType = crustTypeSelect.value;
        console.log("crust type value set")
        let cheeseType = cheeseTypeSelect.value;
        console.log("cheese type value set")

        // Will set the info for the toppings as an array
        let pizzaToppings = [];
        console.log("pizza topings array made")
    

        // This will loop through each topping in the checkboxes, juuust to make sure that at least 1 of them was checked
        for (let i = 0; i < 10; i++) {
            let topSelected = `#topping${i + 1}`;
            let toppingOption = document.querySelector(topSelected);
            if (toppingOption.checked) {
                pizzaToppings.push(toppingOption.value);
            }
        }
        let pizzaMade = new Pizza (pizzaSize, crustType, cheeseType, pizzaToppings); // This will create a brand new Pizza Object using the user defined variables
        deliveryOutput.textContent = pizzaMade.summary();
    }
    event.preventDefault(); // This is to simply prevent the page from completly resfreshing
});