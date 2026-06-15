// CART ARRAY
let cart = [];
let totalPrice = 0;

// ALL BUTTONS
const addToCartButtons =
document.querySelectorAll(".card button:first-of-type");

const buyNowButtons =
document.querySelectorAll(".card button:last-of-type");

// ADD TO CART
addToCartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
        button.parentElement;

        const productName =
        card.querySelector("h3").innerText;

        const productPrice =
        card.querySelector("p")
        .innerText
        .replace("₹","")
        .replace(",","");

        cart.push(productName);

        totalPrice += Number(productPrice);

        alert(
        productName +
        " Added To Cart 🛒" +
        "\n\nTotal Items: " +
        cart.length +
        "\nTotal Price: ₹" +
        totalPrice
        );
    });
});

// BUY NOW
buyNowButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
        button.parentElement;

        const productName =
        card.querySelector("h3").innerText;

        const productPrice =
        card.querySelector("p").innerText;

        alert(
        "Proceeding to Payment 💳" +
        "\n\nProduct: " +
        productName +
        "\nPrice: " +
        productPrice
        );
    });
});

// SEARCH BAR
const searchBar =
document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {

    const searchText =
    searchBar.value.toLowerCase();

    const products =
    document.querySelectorAll(".card");

    products.forEach(product => {

        const name =
        product.querySelector("h3")
        .innerText
        .toLowerCase();

        if(name.includes(searchText)){
            product.style.display =
            "block";
        }
        else{
            product.style.display =
            "none";
        }

    });

});

// 🔍 SEARCH FUNCTION
document.getElementById("searchBar").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});


// 🎞️ IMAGE SLIDER
let images = [
  "images/logo/banner.jpeg",
  "images/mobile-smart-devices/iphone15.webp",
  "images/laptop-computer/hp laptop.jpg"
];

let index = 0;
let slider = document.getElementById("slider");

setInterval(() => {
  index = (index + 1) % images.length;
  slider.src = images[index];
}, 3000);

<script>
function searchProduct() {
  let input = document.getElementById("searchInput").value;
  alert("Searching for: " + input);
}
</script>