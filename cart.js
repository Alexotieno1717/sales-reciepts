// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", ready)
// } else {
//     ready()
// }

var addToCartButtons = document.getElementsByClassName("btn-warning")
for (var i = 0; i < addToCartButtons.length; i ++) {
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCartClicked)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    console.log(title, price)
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    var cartRow = document.createElement("div")
    cartRow.classList.add("cart-row")
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title")
    console.log(cartItemNames)
    for (var i = 0; i < cartItemNames.length; i ++) {
        if (cartItemNames[i].innerText == title){
            console.log(cartItemNames[i].innerText)
            alert("This item is already added to the cart!")
            return
        }
    }
    var cartRowContents = ` 
    <div class="row mt-3">
        <div class="col-md-6">
            <h6 class="cart-item-title"">${title}</h6>
        </div>
        <div class="col-md-3">
            <span class="cart-price cart-column">${price}</span>
        </div>
        <div class="col-md-3 cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem)
}



function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cart = cartItemContainer.getElementsByClassName("cart-row")
    var cartRows = cartItemContainer.getElementsByClassName("row")
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("cart-price")[0]
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(priceElement.innerText.replace("Ksh", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName("cart-total-price")[0].innerText = "Ksh " + total
}
