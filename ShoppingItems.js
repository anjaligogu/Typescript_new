document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  itemDisplay();
});

function itemDisplay() {
  var visibleItems = document.getElementById("items").value;
  if (visibleItems === "") return;

  var newItem = document.createElement("span");
  newItem.textContent = visibleItems;

  var itemContainer = document.createElement("div");
  itemContainer.className = "item-container";

  document.getElementById("items").value = "";
  ///////
  newItem.onclick = function () {
    if (!itemContainer.classList.contains("done")) {
      itemContainer.classList.add("done");

      newItem.style.color = "white";
      itemContainer.style.backgroundColor = "MediumAquaMarine";
      itemContainer.style.textDecoration = "line-through";
      updateItemCount(1);
    } else {
      itemContainer.classList.remove("done");
      newItem.style.fontSize = "";
      itemContainer.style.backgroundColor = "";
      itemContainer.style.textDecoration = "";
      updateItemCount(-1);
    }
  };

  /////////////
  var deleteButton = document.createElement("span");
  deleteButton.textContent = "❌";
  deleteButton.className = "delete-button";
  deleteButton.onclick = function () {
    itemContainer.remove();
    updateItemCount(-1);
  };
  deleteButton.style.marginRight = "10px";

  //////

  var doneButton = document.createElement("span");
  doneButton.textContent = "✔";
  doneButton.className = "done-button";
  doneButton.onclick = function () {
    newItem.click();
  };

  ////////
  itemContainer.appendChild(newItem);
  itemContainer.appendChild(deleteButton);
  itemContainer.appendChild(doneButton);
  document.getElementById("demo").appendChild(itemContainer);
}

////

function updateItemCount(change) {
  var itemCountElement = document.getElementById("item-count");
  var totalCount = parseInt(itemCountElement.textContent.split(": ")[1]);

  if (isNaN(totalCount)) {
    totalCount = 0;
  }

  totalCount += change;
  if (totalCount < 0) {
    totalCount = 0;
  }
  itemCountElement.textContent = "Items: " + totalCount;
}

function hideSelectedItems() {
  var itemContainers = document.querySelectorAll(".item-container");
  itemContainers.forEach(function (container) {
    if (container.classList.contains("done")) {
      container.classList.add("hidden");
    }
  });
}
