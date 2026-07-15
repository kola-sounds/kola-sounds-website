import { supabase } from "./supabase";

export interface MusicItem {
  id: string;
  title: string;
  artist: string;
  description: string;
  audio_url: string;
  youtube_url: string;
  created_at: string;
}

export async function getMusic(): Promise<MusicItem[]> {
  const { data, error } = await supabase
    .from("music")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
