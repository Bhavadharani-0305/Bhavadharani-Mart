// ===============================
// BUYER LOGIN
// ===============================

const buyerLoginForm = document.getElementById("buyerLoginForm");
const loginMessage = document.getElementById("loginMessage");

if (buyerLoginForm) {
    buyerLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            if (loginMessage) {
                loginMessage.textContent =
                    "Please enter your email and password.";
            }
            return;
        }

        if (loginMessage) {
            loginMessage.textContent =
                "Buyer login successful! Welcome to Bhavadharani Mart!";
        }

        setTimeout(function () {
            window.location.href = "buyer-dashboard.html";
        }, 1000);
    });
}


// ===============================
// BUYER SHOW / HIDE PASSWORD
// ===============================

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "Show";
        }
    });
}


// ===============================
// SELLER LOGIN
// ===============================

const sellerLoginForm = document.getElementById("sellerLoginForm");
const sellerLoginMessage = document.getElementById("sellerLoginMessage");

if (sellerLoginForm) {
    sellerLoginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("sellerEmail").value.trim();
        const password = document.getElementById("sellerPassword").value.trim();

        if (email === "" || password === "") {
            if (sellerLoginMessage) {
                sellerLoginMessage.textContent =
                    "Please enter your seller email and password.";
            }
            return;
        }

        if (sellerLoginMessage) {
            sellerLoginMessage.textContent =
                "Seller login successful!";
        }

        setTimeout(function () {
            window.location.href = "seller-dashboard.html";
        }, 1000);
    });
}


// ===============================
// SELLER SHOW / HIDE PASSWORD
// ===============================

const toggleSellerPassword =
    document.getElementById("toggleSellerPassword");

const sellerPasswordInput =
    document.getElementById("sellerPassword");

if (toggleSellerPassword && sellerPasswordInput) {
    toggleSellerPassword.addEventListener("click", function () {
        if (sellerPasswordInput.type === "password") {
            sellerPasswordInput.type = "text";
            toggleSellerPassword.textContent = "Hide";
        } else {
            sellerPasswordInput.type = "password";
            toggleSellerPassword.textContent = "Show";
        }
    });
}


// ===============================
// ADD PRODUCT
// ===============================

const addProductForm =
    document.getElementById("addProductForm");

if (addProductForm) {
    addProductForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const product = {
            name: document.getElementById("productName").value,
            price: Number(document.getElementById("productPrice").value),
            quantity: Number(document.getElementById("productQuantity").value),
            description:
                document.getElementById("productDescription")?.value || ""
        };

        fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to add product");
            }
            return response.json();
        })
        .then(data => {
            alert("Product added successfully!");
            addProductForm.reset();
            console.log(data);
        })
        .catch(error => {
            alert("Failed to add product.");
            console.error(error);
        });
    });
}

// ===============================
// SELLER DASHBOARD BUTTONS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

const addProductButton =
    document.getElementById("addProductButton");

const viewProductsButton =
    document.getElementById("viewProductsButton");

const viewOrdersButton =
    document.getElementById("viewOrdersButton");

const manageProductsButton =
    document.getElementById("manageProductsButton");

const manageOrdersButton =
    document.getElementById("manageOrdersButton");

const viewProfileButton =
    document.getElementById("viewProfileButton");

const sellerLogout =
    document.getElementById("sellerLogout");


if (addProductButton) {
    addProductButton.onclick = function () {
        window.location.href = "add-product.html";
    };
}

if (viewProductsButton) {
    viewProductsButton.onclick = function () {
        window.location.href = "view-products.html";
    };
}

if (viewOrdersButton) {
    viewOrdersButton.onclick = function () {
        window.location.href = "view-orders.html";
    };
}

if (manageProductsButton) {
    manageProductsButton.onclick = function () {
        window.location.href = "manage-products.html";
    };
}

if (manageOrdersButton) {
    manageOrdersButton.onclick = function () {
        window.location.href = "manage-orders.html";
    };
}

if (viewProfileButton) {
    viewProfileButton.onclick = function () {
        window.location.href = "seller-profile.html";
    };
}

if (sellerLogout) {
    sellerLogout.onclick = function () {
        window.location.href = "seller-login.html";
    };
}

});