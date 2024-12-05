import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addPost } from "../services/apiPosts";

function AddPost() {
    const { userId, SetUserId } = useState("");
    const { title, setTitle } = useState("");
    const { content, setContent } = useState("");
    const queryClient = useQueryClient;
    const mutation = useMutation({
        mutationFn: addPost,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ userId, title, content });
        SetUserId("");
        setTitle("");
        setContent("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Posts</h1>
            <input
                type="text"
                placeholder="UserID"
                value={userId}
                onChange={(e) => SetUserId(e.target.value)}
            />
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={content}
                placeholder="Content"
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="susbmit">
                {mutation.isLoading ? "Adding..." : AddPost}
            </button>
        </form>
    );
}
export default AddPost;
