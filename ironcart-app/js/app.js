let foodCode = '';
availableFoodsArray.forEach(eachFood => {
    foodCode += `<li>
                    <img src=${eachFood.img} alt=${eachFood.name}>
                    <h3>${eachFood.name}</h3>
                    <p>${eachFood.description}</p>
                    <p>${eachFood.price}</p>
                    <button data-food=${eachFood.id}>Añadir</button>
                </li>`

})
availableFoodsList.innerHTML = foodCode;

let buttons = document.querySelectorAll('button')
buttons.forEach(eachButton => {
    eachButton.onclick = insertFoodOnBuyingPanel;
    
})
function insertFoodOnBuyingPanel() {
    let foodID = this.dataset.food
    let selectedFood = availableFoodsArray.find(eachFood => eachFood.id===foodID)
    let foodCode = `<li>
                        <img src=${selectedFood.img} alt=${selectedFood.name}>
                        <h3>${selectedFood.name}</h3>
                        <p>${selectedFood.description}</p>
                        <p>Energía: ${selectedFood.kcal} kcal. | Proteínas: ${selectedFood.protein} gr. | Grasa: ${selectedFood.fat} gr. | Precio: ${selectedFood.price}€</p>
                    </li>`
    buyingFoodsList.innerHTML += foodCode;
    updateResults(selectedFood)
}
let totalItems = 0;
let totalPrice = 0;

function updateResults(food) {
    totalItems++
    totalPrice += food.price
    result.innerHTML = `Precio total para ${totalItems} artículo(s): ${totalPrice}€` 
    updateCounter(totalItems)   
}
function updateCounter (value){
    counter.style.opacity = 0;
    setTimeout(() => {
        counter.innerHTML = value;
        counter.style.opacity = 1;
    }, 200)
}