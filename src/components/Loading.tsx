import { Loader2 } from "lucide-react";

const Loading = () => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-black" />
            </div>
        </div>
    )
}

export default Loading;