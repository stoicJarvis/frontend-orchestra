import { IProduct } from "../interfaces/IProduct";
import { ProductCard } from "./ProductCard";

export default function ProductsComponent({ products }: { products: IProduct[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {
                products.map((product) => {
                    return (
                        <ProductCard product={product} />
                    );
                })
            }
        </div>
    )
}