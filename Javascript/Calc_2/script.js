window.addEventListener("load", initEvents);
var oprs;
var numbers;
var textBox;
var opr;
var boxValue;

function initEvents() {
    textBox = document.querySelector("#box_1");
    numbers = document.querySelectorAll(".num");
    oprs = document.querySelectorAll(".opr");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", appendValues);
    }
    for (var i = 0; i < oprs.length; i++) {
        oprs[i].addEventListener("click", appendOperators);
    }
}

function appendValues() {
    var currentNum = event.srcElement.innerHTML;
    textBox.value += currentNum;
    boxValue = textBox.value;
}

function appendOperators() {
    currentOpr = event.srcElement.innerHTML;
    lastVal = boxValue.charAt(boxValue.length - 1);
    // console.log(lastVal);
    for (var i = 0; i < oprs.length; i++) {
        if (lastVal == oprs[i].innerHTML) {
            return;
        }
    }
    textBox.value = boxValue + currentOpr;
}