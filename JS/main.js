// main.js

$(document).ready(function () {
    // 啟用 Bootstrap 輪播（自動切換）
    $('#carouselExampleIndicators').carousel({
      interval: 3000, // 3秒自動輪播
      ride: 'carousel'
    });
  
    // 按鈕提示訊息（可擴充更多提示）
    $('.btn-outline-warning').hover(function () {
      $(this).addClass('shadow');
    }, function () {
      $(this).removeClass('shadow');
    });
  
    // 假登入提示
    $('a:contains("登入")').click(function (e) {
      e.preventDefault();
      alert('尚未實作登入功能，可用假資料模擬登入效果');
    });
  });

// 取得網址參數並載入商品詳細資料
function loadProductDetail() {
  const products = [
    {
      id: 1,
      name: "爆品 A",
      price: 199,
      originalPrice: 299,
      description: "這是超高人氣的限時爆品，CP值破表，適合家庭日常使用，限量供應，先搶先贏！",
      image: "images/Hot Deal A.jpg"
    },
    {
      id: 2,
      name: "人氣美食 B",
      price: 150,
      originalPrice: 220,
      description: "熱銷上千份，美味不打折！",
      image: "images/Hot Deal B.jpg"
    },
    {
      id: 3,
      name: "超值餐券 C",
      price: 520,
      originalPrice: 680,
      description: "知名品牌餐券限時特惠中！",
      image: "images/Hot Deal C.jpg"
    }
    // 可繼續擴充更多商品
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("product"));
  const product = products.find(p => p.id === productId);

  if (product) {
    $("#product-name").text(product.name);
    $("#product-price")
      .html(`團購價 NT$${product.price} <del class="text-muted ml-3">原價 NT$${product.originalPrice}</del>`)
      .data("price", product.price);
    $("#product-description").text(product.description);
    $("#product-image").attr("src", product.image).attr("alt", product.name);
  }
}

// 加入購物車功能
function addToCart() {
  const name = $("#product-name").text();
  const price = parseInt($("#product-price").data("price"));
  const quantity = parseInt($("#quantity").val());

  const product = { name, price, quantity };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`已將 ${quantity} 件商品加入購物車！`);
}

// index.html 專用加入購物車函數
function addToCartFromIndex(name, price) {
  const product = { name, price, quantity: 1 };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`已將 ${product.name} 加入購物車！`);
}

// 購物車清單頁面載入
function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = $("#cart-list");
  const totalAmount = $("#total-amount");

  if (cart.length === 0) {
    cartList.html("<p class='text-muted'>購物車內尚無商品。</p>");
    totalAmount.text("0");
    return;
  }

  let total = 0;
  let html = "<ul class='list-group mb-3'>";
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    html += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.name} x ${item.quantity}
        <span>NT$${subtotal}</span>
      </li>`;
  });
  html += "</ul>";
  cartList.html(html);
  totalAmount.text(total);
}
document.addEventListener("DOMContentLoaded",()=>{
  const btn = document.getElementById("backToTop");

  // 滾動出現／隱藏按鈕
  window.addEventListener("scroll",()=>{
    btn.style.display = (window.scrollY > 300) ? "flex" : "none";
  });

  // 點擊滑動至頂
  btn.addEventListener("click",()=>{
    window.scrollTo({top:0, behavior:"smooth"});
  });
});