import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/apiPosts";

function Post() {
    const {
        data: posts,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });
    if (isLoading) return <p>Loading Post...</p>;
    if (isError) return <p>{error.message}</p>;
    return (
        <div>
            <h2>Post</h2>
            <ul>
                {posts.map((post) => (
                    <li key={posts.id}>
                        <h1>{post.title}</h1>
                        <h2>{post.content}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Post;
