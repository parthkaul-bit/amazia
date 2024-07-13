import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import {cart, addToCart} from '../data/cart.js';
import { calculateCartQuantity } from '../data/cart.js';
import {loadCart, loadCartFetch} from '../data/cart.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';

// import '../data/cart-class.js';
// import '../data/car.js'
import '../data/backend-practice.js'

export function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();
}

async function loadPage() {
    try {
      // throw 'error1';
        await Promise.all([loadCartFetch(()=>{
          // console.log("something")
        }), loadProductsFetch()])

    //     await loadProductsFetch();    
  
    //   const value = await new Promise((resolve, reject) => {
    //     // throw 'error2';
    //     loadCartFetch(() => {
    //       // reject('error3');
    //       resolve('value3');
    //     });
    //   });
  
    } catch (error) {
      console.log('Unexpected error. Please try again later.');
    }
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  }
  await loadPage();
