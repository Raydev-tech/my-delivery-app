import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dhoofamtzmqkstsneyfj.supabase.co"
const supabaseAnon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRob29mYW10em1xa3N0c25leWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzUwOTAsImV4cCI6MjA1MTkxMTA5MH0.yTVedRmyJ6K5iUoZhAg3Ms2-cuyOs6h7xZUzvZNOfVY"

export const supabaseClient = createClient(supabaseUrl,supabaseAnon)
