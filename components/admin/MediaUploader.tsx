"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";

interface MediaUploaderProps {
  bucket: string;
  folder?: string;
  onUploadComplete: (url: string, filename: string) => void;
}

export default function MediaUploader({
  bucket,
  folder = "",
  onUploadComplete,
}: MediaUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);

    const filename = `${Date.now()}-${file.name}`;

    const path = folder
      ? `${folder}/${filename}`
      : filename;

    const { error } = await supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);

    setPreview(data.publicUrl);

    onUploadComplete(data.publicUrl, path);

    setUploading(false);
  }

  function chooseFile() {
    inputRef.current?.click();
  }

  return (
    <div className="rounded-2xl border border-dashed border-neutral-700 p-6">

      {preview ? (
        <Image
          src={preview}
          alt="Preview"
          width={700}
          height={500}
          className="mb-6 h-64 w-full rounded-xl object-cover"
        />
      ) : (
        <div className="mb-6 flex h-64 items-center justify-center rounded-xl bg-neutral-900 text-gray-500">
          No Image Selected
        </div>
      )}

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          upload(file);
        }}
      />

      <Button
        onClick={chooseFile}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Choose Image"}
      </Button>

    </div>
  );
}
