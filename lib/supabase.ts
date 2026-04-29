// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Testimoni = {
  id: number;
  nama: string;
  lokasi: string;
  layanan: string;
  ulasan: string;
  created_at: string;
  approved: boolean;
};
