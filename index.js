"use strict";

const currentBlc = document.getElementsByClassName("current-blc");
const totalIncome = document.getElementsByClassName("total-income");
const profileImg = document.getElementsByTagName("Img");
const profileName = document.getElementsByClassName("profileName");
const inputExpenses = document.getElementsByTagName("input");
const addCategory = document.getElementsByClassName("Category-type");
const calculatorModel = document.getElementById("openModal");

const firstDataCato = document.getElementsByClassName("data-feed-first-catog");
const firstDataPrice = document.getElementsByClassName("data-feed-first-price");
const secondDataCato = document.getElementsByClassName(
  "data-feed-second-catog"
);
const secondDataPrice = document.getElementsByClassName(
  "data-feed-second-price"
);
const thirdDataCato = document.getElementsByClassName("data-feed-third-catog");
const thirdDataPrice = document.getElementsByClassName("data-feed-third-price");

// calculatro starts
// opening the model
calculatorModel.addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});
// closing the model
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
// close the calcuator model on clicking outside the model
window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// retrive user input values on submit

const expenseForm = document.getElementById("expenseForm");
const formElm = document.querySelector("form");
const tbodyElm = document.querySelector("tbody");
const tableElm = document.querySelector("table");

function updateTable(e) {
  e.preventDefault();
  const category = document.getElementById("category").value;
  const item = document.getElementById("items").value;
  const cost = parseFloat(document.getElementById("cost").value);

  tbodyElm.innerHTML += ` 
            <tr>
                <td>${category}</td>
                <td>${item}</td>
                <td>${cost}</td>
                <td><button class= 'deleteBtn'>Delete</button></td>
            </tr>  `
}
function onDelete(e){
    if(!e.target.classList.contains('deleteBtn')) return;

    const btn = e.target;
    btn.closest('tr').remove();

}
tableElm.addEventListener('click',onDelete)
expenseForm.addEventListener("submit", updateTable);

// expenseForm.addEventListener('submit', function(event) {

//     event.preventDefault();
//     addExpense(category,item, cost);
//     expenseForm.reset();
// });

// list the added category and cost
function addExpense(category, item, cost) {
  const expenseList = document.getElementById("expenseList");
  const li = document.createElement("li");
  li.textContent = `${category}: $ ${item} ${cost.toFixed(5)}`;
  expenseList.appendChild(li);
  updateTotal(cost);
}
// calculate the  total sum and display
function updateTotal(cost) {
  const totalElement = document.getElementById("total");
  const currentTotal = parseFloat(totalElement.textContent);
  const newTotal = currentTotal + cost;
  totalElement.textContent = newTotal.toFixed(2);
}

// calculatro end
