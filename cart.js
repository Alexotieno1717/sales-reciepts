// if (document.readyState == "loading") {
//     document.addEventListener("DOMContentLoaded", ready)
// } else {
//     ready()
// }

var addToCartButtons = document.getElementsByClassName("btn-warning")
for (var i = 0; i < addToCartButtons.length; i ++) {
    var button = addToCartButtons[i]
    button.addEventListener("click", function(){
    })
}


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
    var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}
