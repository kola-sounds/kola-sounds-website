"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useCrud<T = any>(table: string) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setLoading(true);

    const { data, error } = await supabase
      .from(table)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setItems((data ?? []) as T[]);
    }

    setLoading(false);
  }

  async function createItem(values: Partial<T>) {
    const { error } = await supabase
      .from(table)
      .insert(values as any);

    if (error) {
      console.error(error);
      return;
    }

    await refresh();
  }

  async function updateItem(
    id: string,
    values: Partial<T>
  ) {
    const { error } = await supabase
      .from(table)
      .update(values as any)
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    await refresh();
  }

  async function deleteItem(id: string) {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    await refresh();
  }

  return {
    items,
    loading,

    createItem,
    updateItem,
    deleteItem,

    refresh,

    // Backward compatibility
    create: createItem,
    update: updateItem,
    remove: deleteItem,
  };
}
