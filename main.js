
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
    hamburger.onclick = () => {
        navLinks.classList.toggle("open");
    };
}

const tombolBeli = document.querySelectorAll(".cart-btn");

for (let i = 0; i < tombolBeli.length; i++) {
    tombolBeli[i].onclick = function() {
  
        const kotakProduk = this.closest(".product-card");
        
       
        const nama = kotakProduk.querySelector("h3").innerText;
        const harga = kotakProduk.querySelector(".product-price").innerText;
        const foto = kotakProduk.querySelector(".product-card-img img").getAttribute("src");

     
        localStorage.setItem("product", nama);
        localStorage.setItem("price", harga);
        localStorage.setItem("image", foto);

  
        window.location.href = "order.html";
    };
}


if (window.location.pathname.includes("order.html")) {
    window.onload = () => {
        const namaProduk = localStorage.getItem("product");
        const hargaProduk = localStorage.getItem("price");
        const fotoProduk = localStorage.getItem("image");

        if (namaProduk) {
            const h4 = document.querySelector(".order-preview h4");
            const priceDiv = document.querySelector(".order-preview .price");
            const imgTag = document.querySelector(".order-preview .product-img img");

            if (h4) h4.innerText = namaProduk;
            if (priceDiv) priceDiv.innerText = hargaProduk;
            if (imgTag) imgTag.src = fotoProduk;
        }
    };
}