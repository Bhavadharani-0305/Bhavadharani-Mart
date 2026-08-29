// ===============================
// BUYER - SHOW / HIDE PASSWORD
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
// BUYER LOGIN
// ===============================

const buyerLoginForm = document.getElementById("buyerLoginForm");
const loginMessage = document.getElementById("loginMessage");

if (buyerLoginForm && loginMessage) {

    buyerLoginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value.trim() : "";

        if (email === "" || password === "") {

            loginMessage.textContent =
                "Please enter your email and password.";

            return;
        }

        loginMessage.textContent ="Buyer login successful! Welcome to Bhavadharani Mart!";

        setTimeout(function () {
    window.location.href = "buyer-dashboard.html";
     }, 1000);
    });

}


// ===============================
// SELLER - SHOW / HIDE PASSWORD
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
// SELLER LOGIN
// ===============================

const sellerForm =
    document.getElementById("sellerLoginForm");

const sellerMessage =
    document.getElementById("sellerLoginMessage");

if (sellerForm && sellerMessage) {

    sellerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const sellerEmailInput =
            document.getElementById("sellerEmail");

        const sellerPasswordInput =
            document.getElementById("sellerPassword");

        const email =
            sellerEmailInput ? sellerEmailInput.value.trim() : "";

        const password =
            sellerPasswordInput ? sellerPasswordInput.value.trim() : "";

        if (email === "" || password === "") {

            sellerMessage.textContent =
                "Please enter your seller email and password.";

            return;
        }

        sellerMessage.textContent =
            "Seller login successful! Welcome to Bhavadharani Mart!";
        setTimeout(function () {
         window.location.href = "seller-dashboard.html";
        }, 1000);
    });

}


// ===============================
// SELLER FORGOT PASSWORD
// ===============================

const sellerForgotPassword =
    document.getElementById("sellerForgotPassword");

if (sellerForgotPassword) {

    sellerForgotPassword.addEventListener("click", function (event) {

        event.preventDefault();

        alert("Password reset feature will be available soon.");
      
    });

}

// Add Product
const addProductForm = document.getElementById("addProductForm");

if (addProductForm) {
    addProductForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const productName = document.getElementById("productName").value.trim();
        const productPrice = document.getElementById("productPrice").value.trim();
        const productQuantity = document.getElementById("productQuantity").value.trim();

        if (productName && productPrice && productQuantity) {

            const product = {
                name: productName,
                price: productPrice,
                quantity: productQuantity
            };

            localStorage.setItem("product", JSON.stringify(product));

            alert("Product added successfully!");

            addProductForm.reset();
        }
    });
}



// View Products
const viewProductsButton = document.getElementById("viewProductsButton");

if (viewProductsButton) {
    viewProductsButton.addEventListener("click", function () {
        window.location.href = "view-products.html";
    });
}


// View Orders
const viewOrdersButton = document.getElementById("viewOrdersButton");

if (viewOrdersButton) {
    viewOrdersButton.addEventListener("click", function () {
        window.location.href = "view-orders.html";
    });
}

const manageProductsButton = document.getElementById("manageProductsButton");

if (manageProductsButton) {
    manageProductsButton.addEventListener("click", function () {
        window.location.href = "view-products.html";
    });
}

const manageOrdersButton = document.getElementById("manageOrdersButton");

if (manageOrdersButton) {
    manageOrdersButton.addEventListener("click", function () {
        window.location.href = "view-orders.html";
    });
}

const viewProfileButton = document.getElementById("viewProfileButton");

if (viewProfileButton) {
    viewProfileButton.addEventListener("click", function () {
        window.location.href = "seller-profile.html";
    });
}


const editProfileButton = document.getElementById("editProfileButton");

if (editProfileButton) {
    editProfileButton.addEventListener("click", function () {
        window.location.href = "seller-profile-edit.html";
    });
}

const saveProfileButton = document.getElementById("saveProfileButton");

if (saveProfileButton) {
    saveProfileButton.addEventListener("click", function () {
        alert("Profile updated successfully!");
    });
}

// Add Product Button
const addProductButton = document.getElementById("addProductButton");

if (addProductButton) {
    addProductButton.addEventListener("click", function () {
        window.location.href = "add-product.html";
    });
}