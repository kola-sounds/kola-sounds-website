import { supabase } from "./supabase";

export interface UpdateItem {
  id: string;
  title: string;
  content: string;
  image_url: string;
  status: string;
  created_at: string;
}

export async function getLatestUpdate(): Promise<UpdateItem | null> {
  const { data, error } = await supabase
    .from("updates")
    .select("*")
    .eq("status", "Published")
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
