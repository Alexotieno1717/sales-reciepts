// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", ready)
// } else {
//     ready()
// }

//clear cart items
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearCart)
function clearCart()
{
    document.getElementById("cart-items").innerHTML = ""
    document.getElementsByClassName("cart-total-price")[0].innerText = "Ksh " + 0
}

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

    var btn = document.createElement('button')
    var cartRowContents = `
    <tr class="rowcart cart-row">
        <td class="cart-item-title" scope="col">${title}</td>
        <td class="cart-price cart-column" scope="col">${price}</td>
        <td>
            <input class="cart-quantity-input" type="number" value="1">

            <button class="btn btn-danger" type="button">REMOVE</button>
        </td
    </tr>
    `

    cartRow = document.getElementById("cart-items")
    cartRow.innerHTML += cartRowContents
    cartRow.addEventListener('click', (e) =>{
        const isBtn = e.target.nodeName === 'BUTTON'
        if(!isBtn) return;

        removeCartItem(e)
    })
}



function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cart = cartItemContainer.getElementsByClassName("cart-row")

    var cartRows = cartItemContainer.getElementsByClassName("rowcart")
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
