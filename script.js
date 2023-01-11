let output = document.querySelector("#output");
let is_float = false

function add_digit(digit) {
    if (is_float == true) {
        output.innerText = output.innerText + digit.toString()
    } else {
        output.innerText = Number(output.innerText) * 10 + digit;
    }
}

let zero = document.querySelector("#zero")
zero.addEventListener("click", () => add_digit(0))
let one = document.querySelector("#one")
one.addEventListener("click", () => add_digit(1))
let two = document.querySelector("#two")
two.addEventListener("click", () => add_digit(2))
let three = document.querySelector("#three")
three.addEventListener("click", () => add_digit(3))
let four = document.querySelector("#four")
four.addEventListener("click", () => add_digit(4))
let five = document.querySelector("#five")
five.addEventListener("click", () => add_digit(5))
let six = document.querySelector("#six")
six.addEventListener("click", () => add_digit(6))
let seven = document.querySelector("#seven")
seven.addEventListener("click", () => add_digit(7))
let eight = document.querySelector("#eight")
eight.addEventListener("click", () => add_digit(8))
let nine = document.querySelector("#nine")
nine.addEventListener("click", () => add_digit(9))


let tmp = 0
let cur_oper = ""

let clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
    output.innerText = 0;
    cur_oper = null;
    tmp = 0;
    is_float = false
})

let decimal = document.querySelector("#decimal")
decimal.addEventListener("click", () => {
    if (is_float == false) {
        is_float = true
        output.innerText = output.innerText + "."
    }
})

let plus = document.querySelector("#plus")
plus.addEventListener("click", () => {
    tmp = output.innerText;
    output.innerText = 0;
    cur_oper = "plus";
    is_float = false
})

let minus = document.querySelector("#minus")
minus.addEventListener("click", () => {
    tmp = output.innerText;
    output.innerText = 0;
    cur_oper = "minus";
    is_float = false
})

let multiply = document.querySelector("#multiply")
multiply.addEventListener("click", () => {
    tmp = output.innerText;
    output.innerText = 0;
    cur_oper = "multiply";
    is_float = false
})

let divide = document.querySelector("#divide")
divide.addEventListener("click", () => {
    tmp = output.innerText;
    output.innerText = 0;
    cur_oper = "divide";
    is_float = false
})

let equal = document.querySelector("#equal")
equal.addEventListener("click", () => {
    if (cur_oper == "plus") {
        output.innerText = Number(tmp) + Number(output.innerText);
        cur_oper = null;
        tmp = 0;
        is_float = false
    } else if (cur_oper == "minus") {
        output.innerText = Number(tmp) - Number(output.innerText);
        cur_oper = null;
        tmp = 0;
        is_float = false
    } else if (cur_oper == "multiply") {
        output.innerText = Number(tmp) * Number(output.innerText);
        cur_oper = null;
        tmp = 0;
        is_float = false
    } else if (cur_oper == "divide") {
        output.innerText = Number(tmp) / Number(output.innerText);
        cur_oper = null;
        tmp = 0;
        is_float = false
    }
})