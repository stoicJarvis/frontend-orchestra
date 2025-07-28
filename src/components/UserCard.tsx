import { Mail, Phone, MapPin, Calendar, Briefcase } from "lucide-react"
import { UserCardProps } from "../interfaces/IUsers"

export function UserCard({ user }: UserCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            {/* Profile Image and Basic Info */}
            <div className="flex flex-col items-center mb-4">
                <div className="relative mb-3">
                    <img
                        src={user.image || "/placeholder.svg"}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 text-center">
                    {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm text-gray-500 mb-2">@{user.username}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {user.role}
                </span>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-3 text-gray-400" />
                    <span className="truncate">{user.email}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-gray-400" />
                    <span>{user.phone}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                    <span className="truncate">
                        {user.address.city}, {user.address.state}
                    </span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                    <span>{user.age} years old</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="w-4 h-4 mr-3 text-gray-400" />
                    <span className="truncate">
                        {user.company.title} at {user.company.name}
                    </span>
                </div>
            </div>
        </div>
    )
}