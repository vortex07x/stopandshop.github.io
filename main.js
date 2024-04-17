import './style.css'
import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';

console.log(products);

// call the function to display as a cart

showProductContainer(products);
