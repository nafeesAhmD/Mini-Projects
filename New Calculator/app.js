var inputValue = document.getElementById("input-box");
var del = document.getElementById("del");

var notAbleOnStart = ["*", "+", "/"];
var operators = ["+", "-", "*", "/"];

function getValue(num) {
    if (inputValue.value.replace("-", "") === "") {
        if (notAbleOnStart.includes(num)) {
        } else {
            var lastIndex = inputValue.value.slice(inputValue.value.length - 1)
            if (operators.includes(lastIndex) && operators.includes(num)) {
                inputValue.value = inputValue.value.replace(lastIndex, num)
            } else {
                inputValue.value += num
            }
        }
    } else {
        var lastIndex = inputValue.value.slice(inputValue.value.length - 1)
        if (operators.includes(lastIndex) && operators.includes(num)) {
            inputValue.value = inputValue.value.replace(lastIndex, num)
        } else {
            inputValue.value += num
        }
    }  

}
function clearAll() {
    inputValue.value = "";
}

function equalVal() {
    inputValue.value = eval(inputValue.value);
}

function clearGr() {
    var delVal = inputValue.value.slice(0,-1);
    // inputBox.value = inputBox.value.slice(0, -1);
    inputValue.value = delVal;
}
