import { supabase } from "./supabase";

export async function getGallery() {
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function createGallery(item: {
  title: string;
  description: string;
  image_url: string;
}) {
  const { error } = await supabase
    .from("gallery")
    .insert(item);

  if (error) throw error;
}

export async function deleteGallery(id: string) {
  const { error } = await supabase
    .from("gallery")
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function updateGallery(
  id: string,
  values: {
    title: string;
    description: string;
    image_url: string;
  }
) {
  const { error } = await supabase
    .from("gallery")
    .update(values)
    .eq("id", id);

  if (error) throw error;
}
