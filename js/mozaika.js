const cards = document.querySelectorAll(".cards-types label")

function getPrice() {
    let arr = [];
    cards.forEach((card, index) => {
        arr.push({id: index, long: (card.childNodes[0].textContent), price: parseInt(card.childNodes[4].textContent)})
    })
    console.log(arr)
    return arr;
    
}

getPrice()


