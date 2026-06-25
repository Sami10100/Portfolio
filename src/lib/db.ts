import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

if (!url || url.includes("REPLACE_WITH")) {
  console.warn("[db] SUPABASE_URL not set — lead storage disabled. Add it to .env.local");
}

export const supabase =
  url && key && !url.includes("REPLACE_WITH")
    ? createClient(url, key, { auth: { persistSession: false } })
    : null;
