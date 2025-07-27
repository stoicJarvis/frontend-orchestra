import { IPage } from "../interfaces/IPage";

/*Pages*/
export const LAZY_LOADING_ROUTE = "/lazyLoading";
export const INFINITE_SCROLL_ROUTE = "/infiniteScroll";
export const FOLDER_STRUCTURE_ROUTE = "/folderStructure";
export const DEBOUNCING_ROUTE = "/debouncing";
export const PAGINATION_ROUTE = "/pagination";

export const PAGES: Array<IPage> = [
    {
        pageRoute: "",
        navbarName: "Home"
    },
    {
        pageRoute: LAZY_LOADING_ROUTE,
        navbarName: "Lazy Loading"
    },
    {
        pageRoute: INFINITE_SCROLL_ROUTE,
        navbarName: "Infinite Scroll",
    },
    {
        pageRoute: FOLDER_STRUCTURE_ROUTE,
        navbarName: "Folder Structure",
    },
    {
        pageRoute: DEBOUNCING_ROUTE,
        navbarName: "Debouncing"
    },
    {
        pageRoute: PAGINATION_ROUTE,
        navbarName: "Pagination"
    }
];

export const PRODUCTS_API: string = "https://dummyjson.com/products";

export const PRODUCT_SKELETON_COUNT = 15;