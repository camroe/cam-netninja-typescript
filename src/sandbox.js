"use strict";
exports.__esModule = true;
var Invoice_1 = require("./Invoice");
var invoices = [];
var invOne = new Invoice_1["default"]('mario', 'work on mario website', 250);
var invTwo = new Invoice_1["default"]('luigi', 'work on luigi website', 300);
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var form = document.querySelector('new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// console.log(form);
// console.log(type);
// console.log(tofrom);
// console.log(details);
// console.log(amount);
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
        var invoice = new Invoice_1["default"](tofrom.value, details.value, amount.valueAsNumber);
        invoices.push(invoice);
        console.log(invoice);
        console.log(invoices);
    });
    console.log('EventListner Added - Fill out the form and click Add to see the values.');
}
else {
    console.log('what the fuck?');
}
