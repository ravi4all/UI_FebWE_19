// Event Binding
// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", show);
// })

window.addEventListener("load", initEvents);

function initEvents() {
    document.getElementById("btn").addEventListener("click", show);
}

function show() {
    console.log("Hello...Show Executed..");
    username = document.getElementById("box_1").value;
    document.getElementById("result").innerHTML = username;
}