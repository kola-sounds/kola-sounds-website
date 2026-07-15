"use client";

import { useState } from "react";
import { useCrud } from "@/hooks/useCrud";
import ImageUploader from "@/components/admin/ImageUploader";

export default function GalleryPage() {
  const { items, loading, create, remove } = useCrud("gallery");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function handleCreate() {
    if (!title || !imageUrl) {
      alert("Please upload an image and enter a title.");
      return;
    }

    await create({
      title,
      description,
      image_url: imageUrl,
    });

    setTitle("");
    setDescription("");
    setImageUrl("");
  }

  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-yellow-400">
          Gallery Manager
        </h1>

        <p className="mt-2 text-gray-400">
          Upload and manage gallery images.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 space-y-5">

        <input
          type="text"
          placeholder="Image title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg bg-black p-3 text-white"
        />

        <textarea
          placeholder="Image description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-lg bg-black p-3 text-white"
          rows={4}
        />

        <ImageUploader
          onUpload={(url) => setImageUrl(url)}
        />

        {imageUrl && (
          <div className="space-y-2">
            <p className="text-green-400">
              ✓ Image uploaded successfully
            </p>

            <img
              src={imageUrl}
              alt="Preview"
              className="h-56 w-full rounded-xl object-cover"
            />
          </div>
        )}

        <button
          onClick={handleCreate}
          className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          Save Image
        </button>

      </div>

      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">

        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          Gallery Images
        </h2>

        {loading ? (
          <p className="text-gray-400">
            Loading...
          </p>
        ) : items.length === 0 ? (
          <p className="text-gray-500">
            No images found.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {items.map((item: any) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-neutral-800 bg-black"
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="space-y-2 p-4">
                  <h3 className="text-xl font-bold text-yellow-400">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>

                  <button
                    onClick={() => remove(item.id)}
                    className="mt-4 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}
