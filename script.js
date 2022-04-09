//alert("hello !!");
function sum2number() {
    let num1 = parseInt(prompt('add a number'));
    let num2 = parseInt(prompt('add a number'));
    let result = num1 + num2;
    alert('the result is : ' + result);

}
function init() {
    sum2number();
}
// window.onload= init;

// Example 2
let myarray = [];


function addarray() {
    let num=0;
    num = parseInt(document.getElementById('number1').value);
    myarray.push(num);
}
function sumNnumber() {
    let total = 0;
    for (let i = 0; i <= myarray.length; i++) {
        total += myarray[i];
    }
    return total;
}
function avgNumber() {
    let total = 0;
    for (let i = 0; i < myarray.length; i++) {
        total += myarray[i];
    }
    total = total / myarray.length;
    alert(total);
    return total;
}