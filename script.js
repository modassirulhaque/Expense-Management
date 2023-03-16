//1
const balance = document.getElementById(
    "Balance"
);
const money_plus = document.getElementById(
    'money-plus'
    );
const money_minus = document.getElenmentById(
    'money-minus'
    );
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

//const dummyTransactions = [
//    { id: 1, text: "Flower", amount: -20 },
//    { id: 2, text: "Salary", amount: 300},
//    { id: 3, text: "Book", amount: -10 },
//    { id: 4, text: "Camera", amount: 150 },
//];

//let Transactions = [];

const localStorageTransactions = JSON.parse(localStorage.getItem("transactions"));

let transaction = localStorage.getItem("transactions") !== null ? localStorageTransactions: [];

//s
// Add Transactions
function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === "" || amount.value.trim() === "")   {
        alert("Plesse Enter Text And Value");
    }else{
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value,
        };   

        transactions.push(transaction);

        addTransactionDOM(transaction);
        updateLocalstorage();
        updateValues();
        text.value = "";
        amount.value = "";
    }
}


//5.5
//GENERATE iD
function generateID(){
    return Math.floor(Math.random() * 100000000);
}

//2

//Add transactions to DOM list
function addTransactionDOM(transaction) {
    //GET sign
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    //Add Class Based on Value
    item.classList.add(
        transaction.amount < 0 ? "minus" : "plus"
    );

    item.innerHtml =
    $(transaction.text)
    <span>$(sign) $ {Math.abs(transaction.amount)} </span>
    <button class="delete-btn" onclick="removeTransactions($(transaction.id})">x</button>; 

    list.appendChild(items);    
}


//Update updateValues

function updateValues(){
    const amounts = transaction.map(transactions => transactions.amount);
    const total= amounts.reduce((acc,item) => (acc += item),0).tofixed(2);
    const income = amounts.filter(item => ).reduce((acc,item) => (acc += item),0).toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0)* -1 
    ).toFixed(2);

    balance.innerText ='$$(total)';
    money_plus.innerText ='$$(income)';
    money_minus.innerText = '$$(expense)';
}   

//removeTransaction
function removeTransaction(id) {
    transactions = transctions.filter(transaction => transaction.id !== id);
    Init();
}


//Update local storage
function updateLocalstorage() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
    updateLocalstorage();
    Init();
}

//Init App
function Init() {
    liost.innerHTML="";
    Transactions.forEach(addTransactionDOM);
    updateValues();
}


Init();

form.addEventListener("submit", addTransaction);
