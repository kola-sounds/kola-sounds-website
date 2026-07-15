"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  onUpload: (url: string) => void;
}

export default function SettingsUploader({ onUpload }: Props) {
  const [uploading, setUploading] = useState(false);

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];
    const fileName = `${Date.now()}-${file.name}`;

    setUploading(true);

    const { error } = await supabase.storage
      .from("settings")
      .upload(fileName, file);

    setUploading(false);

    if (error) {
      alert(error.message);
      return;
    }

    const { data } = supabase.storage
      .from("settings")
      .getPublicUrl(fileName);

    onUpload(data.publicUrl);
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={upload}
      />

      {uploading && (
        <p className="mt-2 text-yellow-400">
          Uploading...
        </p>
      )}
    </div>
  );
}
