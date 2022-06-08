let ul = document.querySelector(".add-item");
let finished = document.querySelector(".finished");
let deleted = document.querySelector(".yet-to-do");
// to get the input from user
let getUserInput = (e) => {
    e.preventDefault();
    let userInput = document.querySelector("#user-input").value;
    if(!userInput == ""){
        //main div for list text + button
        let listDiv = document.createElement("div");
        let li = document.createElement("li");
        let text = document.createTextNode(userInput);
        li.appendChild(text);
        listDiv.appendChild(li);
        ul.appendChild(listDiv)
        document.querySelector("#user-input").value = "";
        //div for button
         let btnDiv = document.createElement("div");
         let tickBtn = document.createElement("btnDiv");
        let xBtn =document.createElement("btnDiv");
        tickBtn.innerHTML = "✅️";
        xBtn.innerHTML = "❌️";
       btnDiv.appendChild(tickBtn);
       btnDiv.appendChild(xBtn);
       //append this btnDiv to main Div
       listDiv.appendChild(btnDiv);  

// event listener tickbutton
        tickBtn.addEventListener("click", () => {
           
            finished.appendChild(li);
            listDiv.remove(btnDiv);
            finished.classList.add("done-hide");
           
        });

    // event listener xbutton
        xBtn.addEventListener("click", () => {
            deleted.appendChild(li);
            listDiv.remove(btnDiv);
            deleted.classList.add("notdone-hide");
        })
    }

}
document.querySelector("form").addEventListener("submit",getUserInput);


