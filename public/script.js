// Mahsulotlar ro‘yxatini chiqarish
fetch("/api/products")
    .then(res => res.json())
    .then(data => {
        const div = document.getElementById("products");
        data.forEach(p => {
            div.innerHTML += `<p><b>${p.name}</b> - $${p.price} <br>ID: ${p._id}</p>`;
        });
    });

// Buyurtma yuborish
document.getElementById("order-form").addEventListener("submit", async e => {
    e.preventDefault();
    const buyerName = document.getElementById("name").value;
    const contactInfo = document.getElementById("contact").value;
    const productId = document.getElementById("product").value;

    await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buyerName, contactInfo, productId })
    });

    alert("Buyurtma yuborildi!");
});



//Swiper JS Home

var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Scroll Header

function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//Swiper JS New
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 1,
    loop: 'true',
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        776: {
            slidesPerView: 3,
        },
    }
});

// Show Cart

const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart-shop');
const cartClose = document.getElementById('cart-close');

if(cartShop){ cartShop.addEventListener("click", () => { cart.classList.add('show-cart'); }) }
if(cartClose){ cartClose.addEventListener("click", () => { cart.classList.remove('show-cart'); }) }

// Show Login

const login = document.getElementById('login');
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');

if(loginButton){ loginButton.addEventListener("click", () => { login.classList.add('show-login'); } )}
if(loginClose){ loginClose.addEventListener("click", () => { login.classList.remove('show-login'); } )}

// Show Scroll up

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener("scroll", scrollUp);

// Show Menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) { navToggle.addEventListener("click", () => { navMenu.classList.add('show-menu'); } )}
if(navClose) { navClose.addEventListener("click", () => { navMenu.classList.remove('show-menu'); } )}