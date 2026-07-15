"use client";

import { useState } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormCard from "@/components/admin/FormCard";
import DataTable from "@/components/admin/DataTable";
import ConfirmDeleteDialog from "@/components/admin/ConfirmDeleteDialog";
import UpdateUploader from "@/components/admin/UpdateUploader";
import { useCrud } from "@/hooks/useCrud";

interface Update {
  id: string;
  title: string;
  content: string;
  image_url: string;
  status: string;
  created_at: string;
}

export default function UpdatesPage() {
  const {
    items,
    loading,
    createItem,
    updateItem,
    deleteItem,
  } = useCrud<Update>("updates");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("Published");

  const [editing, setEditing] = useState<Update | null>(null);
  const [deleting, setDeleting] = useState<Update | null>(null);

  async function saveUpdate() {
    if (!title) {
      alert("Title is required.");
      return;
    }

    const payload = {
      title,
      content,
      image_url: imageUrl,
      status,
    };

    if (editing) {
      await updateItem(editing.id, payload);
    } else {
      await createItem(payload);
    }

    resetForm();
  }

  function resetForm() {
    setTitle("");
    setContent("");
    setImageUrl("");
    setStatus("Published");
    setEditing(null);
  }

  function editUpdate(item: Update) {
    setEditing(item);
    setTitle(item.title);
    setContent(item.content ?? "");
    setImageUrl(item.image_url ?? "");
    setStatus(item.status ?? "Published");
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Updates Manager"
        description="Manage ministry news and announcements."
      />

      <FormCard>

        <div className="grid gap-4">

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            rows={8}
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Write update..."
            value={content}
            onChange={(e)=>setContent(e.target.value)}
          />

          <select
            className="rounded-lg bg-neutral-800 p-3"
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
          >
            <option>Published</option>
            <option>Draft</option>
          </select>

          <UpdateUploader
            onUpload={(url)=>setImageUrl(url)}
          />

          {imageUrl && (
            <img
              src={imageUrl}
              alt="Preview"
              className="h-52 rounded-lg object-cover"
            />
          )}

          <button
            onClick={saveUpdate}
            className="rounded-lg bg-yellow-400 py-3 font-bold text-black"
          >
            {editing ? "Update" : "Publish"}
          </button>

        </div>

      </FormCard>

      <DataTable
        loading={loading}
        columns={[
          "Image",
          "Title",
          "Status",
          "Date",
          "Actions",
        ]}
      >
        {items.map((item)=>(
          <tr
            key={item.id}
            className="border-b border-neutral-800"
          >

            <td className="p-3">
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="h-16 w-24 rounded object-cover"
                />
              )}
            </td>

            <td className="p-3">
              {item.title}
            </td>

            <td className="p-3">
              <span className="rounded bg-green-600 px-2 py-1 text-sm">
                {item.status}
              </span>
            </td>

            <td className="p-3">
              {new Date(item.created_at).toLocaleDateString()}
            </td>

            <td className="space-x-2 p-3">

              <button
                onClick={()=>editUpdate(item)}
                className="rounded bg-blue-600 px-3 py-1"
              >
                Edit
              </button>

              <button
                onClick={()=>setDeleting(item)}
                className="rounded bg-red-600 px-3 py-1"
              >
                Delete
              </button>

            </td>

          </tr>
        ))}
      </DataTable>

      <ConfirmDeleteDialog
        open={!!deleting}
        title="Delete Update?"
        message="This update will be permanently deleted."

        onCancel={()=>setDeleting(null)}

        onConfirm={async()=>{
          if(deleting){
            await deleteItem(deleting.id);
          }

          setDeleting(null);
        }}
      />

    </div>
  );
}
