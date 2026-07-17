import { supabase } from "./supabase";

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  is_read?: boolean;
  created_at?: string;
}

export async function sendMessage(
  data: Omit<ContactMessage, "id" | "created_at" | "is_read">
) {
  const { error } = await supabase
    .from("messages")
    .insert([
      {
        ...data,
        is_read: false,
      },
    ]);

  if (error) throw error;
}

export async function markMessageAsRead(id: string) {
  const { error } = await supabase
    .from("messages")
    .update({
      is_read: true,
    })
    .eq("id", id);

  if (error) throw error;
}

export async function deleteMessage(id: string) {
  const { error } = await supabase
    .from("messages")
    .delete()
    .eq("id", id);

  if (error) throw error;
}
