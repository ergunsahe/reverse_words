


const btn = document.querySelector("#btn");
btn.addEventListener("click", dspl)


function dspl(){
    const display = document.querySelector("#display");
    const userInput = document.querySelector("#user-input");
    const wordsList = userInput.value.split(" ")
    let newSentence= "";
    for (i = wordsList.length-1;i>=0;i--) {newSentence += wordsList[i] + " "}
    console.log(wordsList)
    display.innerText = newSentence;
    userInput.value = "";
    userInput.focus()
}

