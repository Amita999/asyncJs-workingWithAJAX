document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer()
{
    const xhr = new XMLHttpRequest();

    xhr.open('get','customer.json',true);

    xhr.onload= function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
document.getElementById('customer').innerHTML = `
<ul>
<li>${customer.id}
</li>
<li>${customer.name}
</li>
<li>${customer.company}
</li>
<li>${customer.phone}
</li>
</ul>`
        }
    }


    xhr.send();
}
    
function loadCustomers()
{
    const xhr = new XMLHttpRequest();

    xhr.open('get','customers.json',true);

    xhr.onload= function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            let output = '';
            customers.forEach(function(customers){
                output +=
                `<ul>
                <li>${customers.id}
                </li>
                <li>${customers.name}
                </li>
                <li>${customers.company}
                </li>
                <li>${customers.phone}
                </li>
                </ul>`
            });
document.getElementById('customers').innerHTML = output



        }
    }


    xhr.send();
}
    