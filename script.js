// LOGIN POPUP
function openLogin() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}


// ORDER POPUP
function openOrder(productName) {
    document.getElementById("selectedProduct").innerText =
        "Selected Product: " + productName;

    document.getElementById("orderPopup").style.display = "flex";
}

function closeOrder() {
    document.getElementById("orderPopup").style.display = "none";
}


// COLLECTION BUTTON
function showCollection() {
    document.getElementById("collection").scrollIntoView({
        behavior: "smooth"
    });
}


// CONFIRM ORDER
function confirmOrder() {
    alert("Your order has been placed successfully! ❤️");
    closeOrder();
}


// CLOSE POPUP WHEN CLICKING OUTSIDE
window.onclick = function(event) {

    if (event.target === document.getElementById("loginPopup")) {
        closeLogin();
    }

    if (event.target === document.getElementById("orderPopup")) {
        closeOrder();
    }
};