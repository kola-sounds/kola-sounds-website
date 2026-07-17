"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  markMessageAsRead,
  deleteMessage,
} from "@/lib/messages";

interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages();

    const channel = supabase
      .channel("messages-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        () => {
          loadMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function loadMessages() {
    setLoading(true);

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (!error) {
      setMessages(data ?? []);
    }

    setLoading(false);
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-yellow-400">
          Contact Messages
        </h1>

        <p className="mt-2 text-gray-400">
          Messages sent from the Kola Sounds website.
        </p>
      </div>

      {loading ? (

        <div className="rounded-xl bg-neutral-900 p-10 text-center">
          Loading messages...
        </div>

      ) : messages.length === 0 ? (

        <div className="rounded-xl bg-neutral-900 p-10 text-center text-gray-400">
          No messages found.
        </div>

      ) : (

        <div className="space-y-6">

          {messages.map((msg) => (

            <div
              key={msg.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg"
            >

              <div className="flex flex-wrap items-center justify-between gap-4">

                <div>

                  <h2 className="text-2xl font-bold text-yellow-400">
                    {msg.name}
                  </h2>

                  <p className="text-gray-400">
                    {msg.email}
                  </p>

                  {msg.phone && (
                    <p className="text-gray-500">
                      {msg.phone}
                    </p>
                  )}

                </div>

                {!msg.is_read && (
                  <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold">
                    NEW
                  </span>
                )}

              </div>

              <div className="mt-6">

                <h3 className="font-bold text-yellow-400">
                  Subject
                </h3>

                <p className="mt-2">
                  {msg.subject}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="font-bold text-yellow-400">
                  Message
                </h3>

                <p className="mt-2 whitespace-pre-line text-gray-300">
                  {msg.message}
                </p>

              </div>

              <div className="mt-6 text-sm text-gray-500">
                {new Date(msg.created_at).toLocaleString()}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {!msg.is_read && (

                  <button
                    onClick={async () => {
                      await markMessageAsRead(msg.id);
                      loadMessages();
                    }}
                    className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-500"
                  >
                    Mark as Read
                  </button>

                )}

                <a
                  href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(
                    msg.subject
                  )}`}
                  className="rounded-lg bg-green-600 px-5 py-2 font-semibold hover:bg-green-500"
                >
                  Reply
                </a>

                <button
                  onClick={async () => {
                    if (
                      confirm(
                        "Delete this message permanently?"
                      )
                    ) {
                      await deleteMessage(msg.id);
                      loadMessages();
                    }
                  }}
                  className="rounded-lg bg-red-600 px-5 py-2 font-semibold hover:bg-red-500"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}
