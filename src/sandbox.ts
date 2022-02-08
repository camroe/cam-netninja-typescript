import Invoice from "./Invoice";

let invoices: Invoice[] = [];
const invOne = new Invoice('mario','work on mario website',250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

const form = document.querySelector('new-item-form')!;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// console.log(form);
// console.log(type);
// console.log(tofrom);
// console.log(details);
// console.log(amount);
if(form) {
form.addEventListener('submit', (e:Event )=> {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
    let invoice = new Invoice(tofrom.value,  details.value,amount.valueAsNumber);
    invoices.push(invoice);
    console.log(invoice);
    console.log(invoices);
});
console.log('EventListner Added - Fill out the form and click Add to see the values.');
} else {
    console.log ('what the fuck?');
}