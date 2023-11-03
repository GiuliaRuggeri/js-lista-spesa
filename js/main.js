let shoppingList = ["chocolate", "salad", "apples", "milk", "bread"]
// console.log("shoppinglist", shoppingList )

let ul = document.getElementById("shoppinglist");

let i = 0;
while (i < shoppingList.length) {
    console.log("lista", shoppingList[i]);
    let itemsList = document.createElement("li");
    itemsList.innerHTML = shoppingList[i];
    console.log(itemsList);
    ul.append(itemsList)
    i++

}