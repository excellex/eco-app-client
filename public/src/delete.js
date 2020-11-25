import { apiGet } from "./utils/getFunctions";
import { categoriesURL } from "./utils/fetchURL";

const getCategories = apiGet(categoriesURL);
console.log(getCategories);
