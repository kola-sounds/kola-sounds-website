"use client";

import { useState } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormCard from "@/components/admin/FormCard";
import DataTable from "@/components/admin/DataTable";
import ConfirmDeleteDialog from "@/components/admin/ConfirmDeleteDialog";
import MusicUploader from "@/components/admin/MusicUploader";
import MusicCoverUploader from "@/components/admin/MusicCoverUploader";
import { useCrud } from "@/hooks/useCrud";

interface Music {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  duration: string;
  release_date: string;
  description: string;
  cover_url: string;
  audio_url: string;
  youtube_url: string;
}

export default function MusicPage() {
  const {
    items,
    loading,
    createItem,
    updateItem,
    deleteItem,
  } = useCrud<Music>("music");

  const [editing, setEditing] = useState<Music | null>(null);
  const [deleting, setDeleting] = useState<Music | null>(null);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  async function saveMusic() {
    if (!title.trim()) {
      alert("Song title is required.");
      return;
    }

    const payload = {
      title,
      artist,
      album,
      genre,
      duration,
      release_date: releaseDate,
      description,
      cover_url: coverUrl,
      audio_url: audioUrl,
      youtube_url: youtubeUrl,
    };

    if (editing) {
      await updateItem(editing.id, payload);
    } else {
      await createItem(payload);
    }

    resetForm();
  }

  function resetForm() {
    setEditing(null);
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
    setDuration("");
    setReleaseDate("");
    setDescription("");
    setCoverUrl("");
    setAudioUrl("");
    setYoutubeUrl("");
  }

  function editMusic(item: Music) {
    setEditing(item);

    setTitle(item.title ?? "");
    setArtist(item.artist ?? "");
    setAlbum(item.album ?? "");
    setGenre(item.genre ?? "");
    setDuration(item.duration ?? "");
    setReleaseDate(item.release_date ?? "");
    setDescription(item.description ?? "");
    setCoverUrl(item.cover_url ?? "");
    setAudioUrl(item.audio_url ?? "");
    setYoutubeUrl(item.youtube_url ?? "");
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Music Manager"
        description="Manage songs, albums and worship recordings."
      />

      <FormCard>

        <div className="grid gap-4">

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Song Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Artist"
            value={artist}
            onChange={(e)=>setArtist(e.target.value)}
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Album"
            value={album}
            onChange={(e)=>setAlbum(e.target.value)}
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Genre"
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Duration (e.g. 4:32)"
            value={duration}
            onChange={(e)=>setDuration(e.target.value)}
          />

          <input
            type="date"
            className="rounded-lg bg-neutral-800 p-3"
            value={releaseDate}
            onChange={(e)=>setReleaseDate(e.target.value)}
          />

          <textarea
            rows={4}
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <label className="font-semibold text-yellow-400">
            Cover Image
          </label>

          <MusicCoverUploader
            onUpload={setCoverUrl}
          />

          {coverUrl && (
            <img
              src={coverUrl}
              alt="Cover"
              className="h-40 w-40 rounded-lg object-cover"
            />
          )}

          <label className="font-semibold text-yellow-400">
            Audio File
          </label>

          <MusicUploader
            onUpload={setAudioUrl}
          />

          {audioUrl && (
            <audio
              controls
              className="w-full"
              src={audioUrl}
            />
          )}

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="YouTube Link"
            value={youtubeUrl}
            onChange={(e)=>setYoutubeUrl(e.target.value)}
          />

          <button
            onClick={saveMusic}
            className="rounded-lg bg-yellow-400 py-3 font-bold text-black"
          >
            {editing ? "Update Song" : "Add Song"}
          </button>

        </div>

      </FormCard>

      <DataTable
        loading={loading}
        columns={[
          "Cover",
          "Title",
          "Artist",
          "Album",
          "Genre",
          "Actions",
        ]}
      >
        {items.map((item)=>(
          <tr key={item.id} className="border-b border-neutral-800">

            <td className="p-3">
              {item.cover_url && (
                <img
                  src={item.cover_url}
                  className="h-16 w-16 rounded-lg object-cover"
                  alt={item.title}
                />
              )}
            </td>

            <td className="p-3">{item.title}</td>

            <td className="p-3">{item.artist}</td>

            <td className="p-3">{item.album}</td>

            <td className="p-3">{item.genre}</td>

            <td className="space-x-2 p-3">

              <button
                onClick={()=>editMusic(item)}
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
        title="Delete Song?"
        message="This song will be permanently deleted."

        onCancel={()=>{
          setDeleting(null);
        }}

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
