import { fruitsProducts, vegetableProducts, flowerProducts } from "./categoryProducts";
import shopProducts from "./products";

const allProducts = [
...shopProducts,
...fruitsProducts,
...vegetableProducts,
...flowerProducts,
];

export default allProducts;