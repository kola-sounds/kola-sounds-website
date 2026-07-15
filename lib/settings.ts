import { supabase } from "./supabase";

export interface SiteSettings {
  id?: string;

  ministry_name: string;
  slogan: string;

  tagline: string;

  phone: string;
  whatsapp: string;
  email: string;
  address: string;

  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;

  logo_url: string;

  hero_image: string;
  hero_image_url: string;

  footer_text: string;
}

export const defaultSettings: SiteSettings = {
  ministry_name: "Kola Sounds",
  slogan: "Sound Beyond Expectations",

  tagline: "Glorifying God Through Music",

  phone: "",
  whatsapp: "",
  email: "",
  address: "",

  facebook: "",
  instagram: "",
  youtube: "",
  tiktok: "",

  logo_url: "",

  hero_image: "",
  hero_image_url: "",

  footer_text: "",
};

export async function getSettings(): Promise<SiteSettings> {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error(error);
    return defaultSettings;
  }

  return {
    ...defaultSettings,
    ...(data ?? {}),
  };
}

export async function saveSettings(
  settings: SiteSettings
): Promise<boolean> {
  const payload = { ...settings };

  delete payload.id;

  const { error } = await supabase
    .from("settings")
    .upsert(payload);

  if (error) {
    console.error(error);
    return false;
  }

  return true;
}
