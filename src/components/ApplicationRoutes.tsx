import { Route, Routes } from "react-router-dom"
import { DEBOUNCING_ROUTE, FOLDER_STRUCTURE_ROUTE, INFINITE_SCROLL_ROUTE, LAZY_LOADING_ROUTE, PAGINATION_ROUTE } from "../utils/constansts"
import { lazy, Suspense } from "react"
import Loading from "./Loading";

const Home = lazy(() => import("../pages/Home"));
const LazyLoading = lazy(() => import("../pages/LazyLoading"));
const InfiniteScroll = lazy(() => import("../pages/InfiniteScroll"));
const FolderStructure = lazy(() => import("../pages/FolderStructure"));
const Debouncing = lazy(() => import("../pages/Debouncing"));
const Pagination = lazy(() => import("../pages/Pagination"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const ApplicationRoutes = () => {
    return (
        <Suspense
            fallback={<div className="flex items-center justify-center h-screen">
                <Loading />
            </div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={LAZY_LOADING_ROUTE} element={<LazyLoading />} />
                <Route path={INFINITE_SCROLL_ROUTE} element={<InfiniteScroll />} />
                <Route path={FOLDER_STRUCTURE_ROUTE} element={<FolderStructure />} />
                <Route path={DEBOUNCING_ROUTE} element={<Debouncing />} />
                <Route path={PAGINATION_ROUTE} element={<Pagination />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}