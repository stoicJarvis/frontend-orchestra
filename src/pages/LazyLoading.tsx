import { lazy, Suspense } from "react";
import { PRODUCT_SKELETON_COUNT, PRODUCTS_API } from "../utils/constansts";
import { useGetData } from "../hooks/useGetData";
import { IProductsResponse } from "../interfaces/IProduct";
import ProductGridSkeleton from "../components/ProductGridSkeleton";

const ProductsComponent = lazy(() => import("../components/ProductsComponent"));
const ErrorComponent = lazy(() => import("../components/ErrorComponent"));

export default function LazyLoadin() {
    const { isFetching, apiResult, error } = useGetData<IProductsResponse>(PRODUCTS_API);

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