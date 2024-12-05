import supabase from "./supabase";

export const getUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw new Error(error.message);
    return data;
};
