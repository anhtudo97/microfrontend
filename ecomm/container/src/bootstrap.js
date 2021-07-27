import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

console.log("Container!");

productsMount(document.querySelector("#prod-products"));
cartMount(document.querySelector("#prod-cart"));