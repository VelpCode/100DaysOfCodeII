const renderShoppingList = items => {
    const shoppingList = document.querySelector("#shopping-list");
    items.forEach(item => {
        shoppingList.insertAdjacentHTML("afterbegin", `<li>${item}</li>`)
    })
}

button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})

button.addEventListener('click', () => {
  msg.classList.toggle('reveal')
})

const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
console.log(renderShoppingList(sampleList))