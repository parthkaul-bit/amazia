import { getProduct } from "../data/products.js";
import { getOrder, orders } from "../data/orders.js";
import { loadProductsFetch } from "../data/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { calculateDeliveryDate } from "../scripts/utils/days.js";

async function loadPage() {
  await loadProductsFetch();

  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");
  const productId = urlParams.get("productId");

  const order = getOrder(orderId);
  const product = getProduct(productId);

  // console.log(order);

  let productDetails;

  order.products.forEach((details) => {
    if (details.productId === product.id) {
      productDetails = details;
    }
  });
  const today = dayjs();
  const orderTime = dayjs(order.orderTime);
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);
  const percentProgress =
    ((today - orderTime) / (deliveryTime - orderTime)) * 100;

  // console.log(percentProgress);
  let trackingHTML = "";
  trackingHTML = `
          <a class="back-to-orders-link link-primary" href="orders.html">
            View all orders
          </a>

          <div class="delivery-date">
          ${calculateDeliveryDate(productDetails.estimatedDeliveryTime)}
          </div>

          <div class="product-info">
            ${product.name}
          </div>

          <div class="product-info">Quantity: ${productDetails.quantity}</div>

          <img
            class="product-image"
            src="${product.image}"
          />

          <div class="progress-labels-container">
            <div class="progress-label 
            ${percentProgress < 50 ? "current-status" : ""}">Preparing</div>
            <div class="progress-label ${
              percentProgress >= 50 && percentProgress < 100
                ? "current-status"
                : ""
            }">Shipped</div>
            <div class="progress-label ${
              percentProgress >= 100 ? "current-status" : ""
            }">Delivered</div>
          </div>

          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${
              percentProgress * 10
            }%;"></div>
          </div>
  `;
  document.querySelector(".js-order-tracking").innerHTML = trackingHTML;
}

loadPage();
