window.addEventListener("load", initEvents);
var f_num;
var s_num;

function initEvents() {
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", calc);
    }
}

function calc() {
    // console.log(event.srcElement.innerHTML);
    var opr = event.srcElement.innerHTML;
    var expression = parseInt(f_num.value) + opr + parseInt(s_num.value);
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("result").innerHTML = result;
}