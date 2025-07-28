import { User } from "../interfaces/IUsers";
import { UserCard } from "./UserCard";

export default function UsersComponent({ users }: { users: User[] }) {
    if (!users || users.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-10">
                No users found.
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-2">
            {users.map((user) => (
                <div key={user.id}>
                    <UserCard user={user} />
                </div>
            ))}
        </section>
    );
}
