import { Route, Routes } from "react-router-dom"
import { FOLDER_STRUCTURE_ROUTE, INFINITE_SCROLL_ROUTE, LAZY_LOADING_ROUTE, PAGINATION_ROUTE } from "../utils/constansts"
import { lazy, Suspense } from "react"
import Loading from "./Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const LazyLoading = lazy(() => import("../pages/LazyLoading"));
const InfiniteScroll = lazy(() => import("../pages/InfiniteScroll"));
const FolderStructure = lazy(() => import("../pages/FolderStructure"));
const Pagination = lazy(() => import("../pages/Pagination"));
const NotFound = lazy(() => import("../pages/NotFound"));

const queryClient = new QueryClient();

export const ApplicationRoutes = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense
                fallback={<div className="flex items-center justify-center h-screen">
                    <Loading />
                </div>}>
                <Routes>
                    <Route path={LAZY_LOADING_ROUTE} element={<LazyLoading />} />
                    <Route path={PAGINATION_ROUTE} element={<Pagination />} />
                    <Route path={INFINITE_SCROLL_ROUTE} element={<InfiniteScroll />} />
                    <Route path={FOLDER_STRUCTURE_ROUTE} element={<FolderStructure />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </QueryClientProvider>
    )
}