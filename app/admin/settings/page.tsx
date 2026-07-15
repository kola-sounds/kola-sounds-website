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

    try {
      setSaving(true);

      await saveSettings(settings);

      alert("Settings saved successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8 text-center">
        Loading settings...
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="p-8 text-center">
        No settings found.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Website Settings"
        description="Manage your ministry information."
      />

      <FormCard title="General Settings">
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

          <h2 className="text-xl font-bold text-yellow-400">
            Hero Image
          </h2>

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
              className="rounded-lg"
            />
          )}

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

          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-yellow-400 py-3 font-bold text-black"
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>

        </div>
      </FormCard>
    </div>
  );
}
