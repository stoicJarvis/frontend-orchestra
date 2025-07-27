import { IProduct } from "../interfaces/IProduct";

export function ProductCard({ product }: { product: IProduct }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-lg hover:scale-105 transition-all duration-200 group">
            <img
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-36 object-contain mb-3 group-hover:scale-110 transition-transform duration-200"
            />
            <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2">{product.title}</h3>
            <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-xs bg-black text-white px-3 py-1 rounded hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}