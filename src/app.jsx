import User from "./components/User";
import UserList from "./components/UserList";
import AddPost from "./features/addPost";

function App() {
    return (
        <div>
            <h1>User Management</h1>
            <UserList />
            <User />
            <AddPost />
        </div>
    );
}

export default App;
