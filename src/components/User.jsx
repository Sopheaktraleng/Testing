import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/apiUsers";

function User() {
    const {
        data: users,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    });
    if (isLoading) return <p>Loading users....</p>;
    if (isError) return <p>Error fetching users:{error.message}</p>;
    return (
        <div>
            <h2>User</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default User;
