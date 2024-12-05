import supabase from "./supabase";

export const getPosts = async () => {
    const { data, error } = await supabase
        .from("posts")
        .select("*,user:UserList(username,email)");
    if (error) throw new Error(error.message);
    return data;
};
export const addPost = async ({ userId, title, content }) => {
    const { data, error } = await supabase
        .from("posts")
        .insert({ userId, title, content });
    if (error) throw new Error(error.message);
    return data;
};
