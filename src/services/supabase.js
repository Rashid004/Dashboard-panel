/** @format */

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lcwcmpphvtdwcyfltwat.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxjd2NtcHBodnRkd2N5Zmx0d2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5OTU1NjksImV4cCI6MjAyMTU3MTU2OX0.5wELrTtO5zr_Dii6UrbU4meW7HuUKNkO49-xnoi_kPE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
