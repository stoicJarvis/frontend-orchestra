import { XCircle } from "lucide-react";

export default function ErrorComponent({ errorMessage }: { errorMessage?: string }) {
    return (
        <div className="bg-white border border-red-200 rounded-lg shadow-lg p-4 max-w-sm mx-auto flex items-center gap-3">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="flex-1">
                <p className="text-gray-900 font-medium text-sm">{errorMessage ? errorMessage : "Something went wrong"}</p>
                <p className="text-gray-600 text-xs">Please try again later</p>
            </div>
            <button className="text-red-500 hover:text-red-700 text-sm font-medium">Retry</button>
        </div>
    )
}