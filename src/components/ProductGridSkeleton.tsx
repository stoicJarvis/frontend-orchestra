function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 animate-pulse">
            <div className="w-full h-36 bg-gray-200 rounded mb-3"></div>

            <div className="mb-2">
                <div className="h-4 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>

            <div className="flex items-center justify-between">
                <div className="h-5 bg-gray-200 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
        </div>
    )
}

export default function ProductGridSkeleton({ count = 8 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    )
}