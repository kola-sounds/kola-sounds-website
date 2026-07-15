"use client";

import { useState } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormCard from "@/components/admin/FormCard";
import DataTable from "@/components/admin/DataTable";
import ConfirmDeleteDialog from "@/components/admin/ConfirmDeleteDialog";
import EventUploader from "@/components/admin/EventUploader";
import { useCrud } from "@/hooks/useCrud";

interface Event {
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

export default function EventsPage() {
  const {
    items,
    loading,
    createItem,
    updateItem,
    deleteItem,
  } = useCrud<Event>("events");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [featured, setFeatured] = useState(false);

  const [editing, setEditing] = useState<Event | null>(null);
  const [deleting, setDeleting] = useState<Event | null>(null);

  async function saveEvent() {
    if (!title.trim()) {
      alert("Event title is required.");
      return;
    }

    const payload = {
      title,
      description,
      venue,
      event_date: eventDate,
      event_time: eventTime,
      banner_url: bannerUrl,
      featured,
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
    setDescription("");
    setVenue("");
    setEventDate("");
    setEventTime("");
    setBannerUrl("");
    setFeatured(false);
    setEditing(null);
  }

  function editEvent(event: Event) {
    setEditing(event);

    setTitle(event.title ?? "");
    setDescription(event.description ?? "");
    setVenue(event.venue ?? "");
    setEventDate(event.event_date ?? "");
    setEventTime(event.event_time ?? "");
    setBannerUrl(event.banner_url ?? "");
    setFeatured(event.featured ?? false);
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Events Manager"
        description="Create and manage church events."
      />

      <FormCard>

        <div className="grid gap-4">

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows={4}
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />

          <input
            type="date"
            className="rounded-lg bg-neutral-800 p-3"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />

          <input
            type="time"
            className="rounded-lg bg-neutral-800 p-3"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />

          <EventUploader
            onUpload={(url) => setBannerUrl(url)}
          />

          {bannerUrl && (
            <img
              src={bannerUrl}
              alt="Banner"
              className="h-48 w-full rounded-lg object-cover"
            />
          )}

          <label className="flex items-center gap-3 rounded-lg bg-neutral-800 p-3">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            <span className="font-medium">Featured Event</span>
          </label>

          <button
            onClick={saveEvent}
            className="rounded-lg bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
          >
            {editing ? "Update Event" : "Create Event"}
          </button>

        </div>

      </FormCard>

      <DataTable
        loading={loading}
        columns={[
          "Banner",
          "Title",
          "Venue",
          "Date",
          "Featured",
          "Actions",
        ]}
      >
        {items.map((event) => (
          <tr
            key={event.id}
            className="border-b border-neutral-800"
          >

            <td className="p-3">
              {event.banner_url && (
                <img
                  src={event.banner_url}
                  alt={event.title}
                  className="h-16 w-24 rounded object-cover"
                />
              )}
            </td>

            <td className="p-3 font-medium">
              {event.title}
            </td>

            <td className="p-3">
              {event.venue}
            </td>

            <td className="p-3">
              {event.event_date}
              <br />
              <span className="text-sm text-gray-400">
                {event.event_time}
              </span>
            </td>

            <td className="p-3">
              {event.featured ? (
                <span className="rounded bg-green-600 px-2 py-1 text-xs font-bold">
                  YES
                </span>
              ) : (
                <span className="rounded bg-neutral-700 px-2 py-1 text-xs">
                  NO
                </span>
              )}
            </td>

            <td className="space-x-2 p-3">

              <button
                onClick={() => editEvent(event)}
                className="rounded bg-blue-600 px-3 py-1 hover:bg-blue-500"
              >
                Edit
              </button>

              <button
                onClick={() => setDeleting(event)}
                className="rounded bg-red-600 px-3 py-1 hover:bg-red-500"
              >
                Delete
              </button>

            </td>

          </tr>
        ))}
      </DataTable>

      <ConfirmDeleteDialog
        open={!!deleting}
        title="Delete Event?"
        message="This event will be permanently deleted."

        onCancel={() => setDeleting(null)}

        onConfirm={async () => {
          if (deleting) {
            await deleteItem(deleting.id);
          }

          setDeleting(null);
        }}
      />

    </div>
  );
}
