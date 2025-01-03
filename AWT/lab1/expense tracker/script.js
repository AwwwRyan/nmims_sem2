
const addButton = document.getElementById("add-btn");
const nameInput = document.getElementById("name");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const expensesBody = document.getElementById("expenses-body");

addButton.addEventListener("click", () => {

  const name = nameInput.value.trim();
  const category = categoryInput.value;
  const price = priceInput.value.trim();


  if (name === "" || price === "") {
    alert("Please fill out all fields.");
    return;
  }

  if (isNaN(price) || price <= 0) {
    alert("Please enter a valid price.");
    return;
  }


  const row = document.createElement("tr");


  const nameCell = document.createElement("td");
  nameCell.textContent = name;
  row.appendChild(nameCell);


  const categoryCell = document.createElement("td");
  categoryCell.textContent = category;
  row.appendChild(categoryCell);


  const priceCell = document.createElement("td");
  priceCell.textContent = `₹${parseFloat(price).toFixed(2)}`;
  row.appendChild(priceCell);


  expensesBody.appendChild(row);


  nameInput.value = "";
  priceInput.value = "";
});
