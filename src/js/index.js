//select the ol
let ol = document.querySelector("ol");

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
        ol.appendChild(newLi);
        document.querySelector("#user-input").value = "";
        // create a div for buttons
        let div = document.createElement("div");
        //create button
        let tickButton = document.createElement("button");
        let notButton = document.createElement("button");
        // add emojis
        let tick = document.createTextNode("✔️");
        let notDone = document.createTextNode("✖️");
        // append button to tickButton
        tickButton.appendChild(tick);
        notButton.appendChild(notDone);
        //append to div
        div.appendChild(tickButton);
        div.appendChild(notButton);
        //append div to li
        newLi.appendChild(div);

    }else{
        document.querySelector("#user-input").placeholder ="Please enter an item";
    }
}
document.querySelector("form").addEventListener("submit",getUserInput);
/* ✔️✖️ */