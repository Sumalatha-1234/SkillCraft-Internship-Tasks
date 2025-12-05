const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

// HANDLE BUTTON CLICKS
buttons.forEach(btn => {
    btn.addEventListener("click", () => handleInput(btn.getAttribute("data-value")));
});

// MAIN FUNCTION FOR INPUT
function handleInput(value) {
    if (value === "C") {                 // CLEAR
        expression = "";
    } 
    else if (value === "DEL") {          // DELETE LAST
        expression = expression.slice(0, -1);
    } 
    else if (value === "=") {            // CALCULATE
        try {
            expression = eval(expression).toString();
        } catch {
            expression = "Error";
        }
    } 
    else {                               // APPEND VALUE
        if (expression === "Error") expression = "";
        expression += value;
    }
    display.value = expression;
}

// 🔥 KEYBOARD SUPPORT (Important for task requirement)
document.addEventListener("keydown", e => {
    if (/[0-9+\-*\/.%]/.test(e.key)) {
        handleInput(e.key);
    }
    if (e.key === "Enter") handleInput("=");
    if (e.key === "Backspace") handleInput("DEL");
    if (e.key === "Escape") handleInput("C");
});
