function addItem() {
  // Get input value
  const newItemInput = document.getElementById("newItem");
  const newItemValue = newItemInput.value;

  // Check if the input is not empty

  if (newItemValue !== "") {
    // Create a new list item
    const newItem = document.createElement("li");
    newItem.classList = "listItem-Order";
    newItem.textContent = newItemValue;

    // Add a remove button to the list item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
      removeItem(newItem);
    };

    newItem.appendChild(removeButton);

    // Add the new list item to the list
    const itemList = document.getElementById("itemList");
    itemList.appendChild(newItem);

    // Clear the input field
    newItemInput.value = "";
  }
}

function removeItem(item) {
  // Remove the item from the list
  const itemList = document.getElementById("itemList");
  itemList.removeChild(item);
}

//button onclick  change background color

function changecolor(color) {
  document.body.style.background = color;
}

function colorFunction() {
  let Backgroundcolor = document.getElementById("backColor");
  changecolor("red");
  Backgroundcolor.innerHTML = "Background Color changed";
}
