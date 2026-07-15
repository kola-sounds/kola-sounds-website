import { supabase } from "./supabase";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  venue: string;
  event_date: string;
  event_time: string;
  banner_url: string;
  featured: boolean;
  created_at: string;
}

export async function getEvents(): Promise<EventItem[]> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}
