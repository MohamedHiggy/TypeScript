import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
//form
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //? by using TUPLES
    //! momken aktbha kda
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    //! aw momken aktbha kda
    /*
        let values: [string, string, number];
        values = [tofrom.value, details.value, amount.valueAsNumber];
    */
    let doc;
    //! lw el user ekhtar ay kema fl dropdown hyro7 ll class bta3 el kema ele e5trha
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
