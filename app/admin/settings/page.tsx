"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/admin/PageHeader";
import FormCard from "@/components/admin/FormCard";
import SettingsUploader from "@/components/admin/SettingsUploader";
import {
  getSettings,
  saveSettings,
  SiteSettings,
} from "@/lib/settings";

export default function SettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const data = await getSettings();
    setSettings(data);
    setLoading(false);
  }

  async function handleSave() {
    if (!settings) return;

    setSaving(true);

    const success = await saveSettings(settings);

    setSaving(false);

    if (success) {
      alert("Settings saved successfully.");
    } else {
      alert("Failed to save settings.");
    }
  }

  if (loading || !settings) {
    return (
      <div className="p-8 text-center">
        Loading settings...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <PageHeader
        title="Website Settings"
        description="Manage all website information."
      />

      <FormCard title="General">

        <div className="grid gap-5">

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Ministry Name"
            value={settings.ministry_name}
            onChange={(e) =>
              setSettings({
                ...settings,
                ministry_name: e.target.value,
              })
            }
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Slogan"
            value={settings.slogan}
            onChange={(e) =>
              setSettings({
                ...settings,
                slogan: e.target.value,
              })
            }
          />

          <textarea
            rows={3}
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Tagline"
            value={settings.tagline}
            onChange={(e) =>
              setSettings({
                ...settings,
                tagline: e.target.value,
              })
            }
          />

        </div>

      </FormCard>

      <FormCard title="Logo">

        <SettingsUploader
          onUpload={(url) =>
            setSettings({
              ...settings,
              logo_url: url,
            })
          }
        />

        {settings.logo_url && (
          <img
            src={settings.logo_url}
            alt="Logo"
            className="mt-5 h-28 rounded-lg bg-white p-4"
          />
        )}

      </FormCard>

      <FormCard title="Hero Image">

        <SettingsUploader
          onUpload={(url) =>
            setSettings({
              ...settings,
              hero_image: url,
            })
          }
        />

        {settings.hero_image && (
          <img
            src={settings.hero_image}
            alt="Hero"
            className="mt-5 rounded-xl"
          />
        )}

      </FormCard>

      <FormCard title="Contact Information">

        <div className="grid gap-5">

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Phone"
            value={settings.phone}
            onChange={(e) =>
              setSettings({
                ...settings,
                phone: e.target.value,
              })
            }
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="WhatsApp"
            value={settings.whatsapp}
            onChange={(e) =>
              setSettings({
                ...settings,
                whatsapp: e.target.value,
              })
            }
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Email"
            value={settings.email}
            onChange={(e) =>
              setSettings({
                ...settings,
                email: e.target.value,
              })
            }
          />

          <textarea
            rows={3}
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Address"
            value={settings.address}
            onChange={(e) =>
              setSettings({
                ...settings,
                address: e.target.value,
              })
            }
          />

        </div>

      </FormCard>

      <FormCard title="Social Media">

        <div className="grid gap-5">

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Facebook URL"
            value={settings.facebook}
            onChange={(e) =>
              setSettings({
                ...settings,
                facebook: e.target.value,
              })
            }
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="Instagram URL"
            value={settings.instagram}
            onChange={(e) =>
              setSettings({
                ...settings,
                instagram: e.target.value,
              })
            }
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="YouTube URL"
            value={settings.youtube}
            onChange={(e) =>
              setSettings({
                ...settings,
                youtube: e.target.value,
              })
            }
          />

          <input
            className="rounded-lg bg-neutral-800 p-3"
            placeholder="TikTok URL"
            value={settings.tiktok}
            onChange={(e) =>
              setSettings({
                ...settings,
                tiktok: e.target.value,
              })
            }
          />

        </div>

      </FormCard>

      <FormCard title="Footer">

        <textarea
          rows={4}
          className="w-full rounded-lg bg-neutral-800 p-3"
          placeholder="Footer text..."
          value={settings.footer_text}
          onChange={(e) =>
            setSettings({
              ...settings,
              footer_text: e.target.value,
            })
          }
        />

      </FormCard>

      <button
        onClick={handleSave}
        disabled={saving}
        className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300 disabled:opacity-60"
      >
        {saving ? "Saving..." : "Save Website Settings"}
      </button>

    </div>
  );
}
