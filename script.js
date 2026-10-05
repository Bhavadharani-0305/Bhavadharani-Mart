// ADD PRODUCT

const addProductForm = document.getElementById("addProductForm");

if (addProductForm) {

    addProductForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const product = {
        name: document.getElementById("productName").value,
        price: Number(document.getElementById("productPrice").value),
        quantity: Number(document.getElementById("productQuantity").value),
        description: document.getElementById("productDescription").value
        };

        fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })

        .then(response => response.json())

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


// SELLER LOGIN

const sellerLoginForm =
    document.getElementById("sellerLoginForm");

if (sellerLoginForm) {

    sellerLoginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("sellerEmail").value;

        const password =
            document.getElementById("sellerPassword").value;

        if (email && password) {

            alert("Seller Login Successful!");

            window.location.href =
                "seller-dashboard.html";

        }

    });

}


// SHOW / HIDE SELLER PASSWORD

const toggleSellerPassword =
    document.getElementById("toggleSellerPassword");

if (toggleSellerPassword) {

    toggleSellerPassword.addEventListener("click", function() {

        const password =
            document.getElementById("sellerPassword");

        if (password.type === "password") {

            password.type = "text";

            toggleSellerPassword.textContent = "Hide";

        } else {

            password.type = "password";

            toggleSellerPassword.textContent = "Show";

        }

    });

}