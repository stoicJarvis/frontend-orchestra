import { IPage } from "../interfaces/IPage";

/*Pages*/
export const LAZY_LOADING_ROUTE = "/lazyLoading";
export const INFINITE_SCROLL_ROUTE = "/infiniteScroll";
export const FOLDER_STRUCTURE_ROUTE = "/folderStructure";
export const PAGINATION_ROUTE = "/pagination";

export const PAGES: Array<IPage> = [
    {
        pageRoute: LAZY_LOADING_ROUTE,
        navbarName: "Lazy Loading"
    },
    {
        pageRoute: PAGINATION_ROUTE,
        navbarName: "Pagination"
    },
    {
        pageRoute: INFINITE_SCROLL_ROUTE,
        navbarName: "Infinite Scroll",
    },
    {
        pageRoute: FOLDER_STRUCTURE_ROUTE,
        navbarName: "Folder Structure",
    },
];

export const PRODUCTS_API: string = "https://dummyjson.com/products";

export const BASE_USERS_API = "https://dummyjson.com/users";

export const getUsersApi = (limit: number, skip: number): string =>
    `${BASE_USERS_API}?limit=${limit}&skip=${skip}`;

export const PRODUCT_SKELETON_COUNT = 15;

export const DATA_STALE_TIME = 5 * 60 * 1000; //5 Minutes

export const DATA_GARBAGE_TIME = 10 * 60 * 1000; // 10 Minutes

export const USERS_LIMIT = 5;