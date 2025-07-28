import { lazy, Suspense } from "react";
import { DATA_GARBAGE_TIME, DATA_STALE_TIME, PRODUCT_SKELETON_COUNT, PRODUCTS_API } from "../utils/constansts";
import { IProductsResponse } from "../interfaces/IProduct";
import ProductGridSkeleton from "../components/ProductGridSkeleton";
import { useQuery } from "@tanstack/react-query";

const ProductsComponent = lazy(() => import("../components/ProductsComponent"));
const ErrorComponent = lazy(() => import("../components/ErrorComponent"));

export default function LazyLoading() {
    const {isLoading: isFetching, data: apiResult, error} = useQuery<IProductsResponse>({
        queryKey: ["products"],
        queryFn: () => 
            fetch(PRODUCTS_API)
                .then(res => {
                    if (!res.ok) throw new Error("Failed to fetch products"); return res.json() 
                }),
        staleTime: DATA_STALE_TIME,
        gcTime: DATA_GARBAGE_TIME
    });

    return (
        <div className="m-6">
            <Suspense fallback={<ProductGridSkeleton count={PRODUCT_SKELETON_COUNT} />}>
                {isFetching ? (
                    <ProductGridSkeleton count={PRODUCT_SKELETON_COUNT} />
                ) : error ? (
                    <ErrorComponent errorMessage={error?.message} />
                ) : (
                    apiResult?.products && <ProductsComponent products={apiResult.products} />
                )}
            </Suspense>
        </div>
    );
};