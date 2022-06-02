//select the ul
let ul = document.querySelector("ul");

//function to create li

let getUserInput = (e) => {
    e.preventDefault();
    // getting the value from the user and declaring to the variable
    let userInput = document.querySelector("#user-input").value;
    if(!userInput == ""){
        // create li
        let newLi = document.createElement("li");
        // text
        let text = document.createTextNode(userInput);
        //append to li
        newLi.appendChild(text);
        ul.appendChild(newLi)
    }
}
document.querySelector("form").addEventListener("submit",getUserInput);