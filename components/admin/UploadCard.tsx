"use client";

import { useState } from "react";

interface UploadCardProps {
  title: string;
  accept: string;
  onUpload: (url: string) => Promise<void>;
}

export default function UploadCard({
  title,
  accept,
  onUpload,
}: UploadCardProps) {
  const [uploading, setUploading] = useState(false);

  async function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      setUploading(true);

      /*
       * Your uploader component should upload
       * to Supabase Storage and return the file URL.
       *
       * Replace this with your existing upload logic.
       */

      const url = "";

      await onUpload(url);

      alert("Upload complete.");
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">

      <p className="mb-3 font-semibold text-yellow-400">
        {title}
      </p>

      <input
        type="file"
        accept={accept}
        onChange={handleChange}
        disabled={uploading}
        className="block w-full text-sm"
      />

      {uploading && (
        <p className="mt-3 text-yellow-400">
          Uploading...
        </p>
      )}

    </div>
  );
}	
