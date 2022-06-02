//select the ol
let ol = document.querySelector("ol");
// create  push finished items
let finished = document.querySelector(".finished");

let yettodo = document.querySelector(".yet-to-do");
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
        tickButton.innerHTML = "✔️";
        notButton.innerHTML = "✖️";
        //append to div
        div.appendChild(tickButton);
        div.appendChild(notButton);
        //append div to li
       newLi.appendChild(div);
        // remove the item if x is clicked
        tickButton.addEventListener("click",() => {
            newLi.classList.add("done");
            let clone = newLi.cloneNode(true);
            // set delay time in linethrough and then remove
            //setTimeout(() => (newLi.remove()),1000);           
            finished.appendChild(clone);       
            
    });
        
        notButton.addEventListener("click",() => {
            newLi.classList.add("notdone");
            let clone = newLi.cloneNode(true);
            yettodo.appendChild(clone);
        });
        
    }else{
        document.querySelector("#user-input").placeholder ="Please enter an item";
    }
}
document.querySelector("form").addEventListener("submit",getUserInput);
/* ✔️✖️ */