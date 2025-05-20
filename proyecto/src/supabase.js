import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://czehzyefpjoxakdoolew.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZWh6eWVmcGpveGFrZG9vbGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3ODIxOTQsImV4cCI6MjA2MzM1ODE5NH0.HPHraWTLUUQ2IozdPXxQYlBBTvow2jclaUNJrw9psn4';
export const supabase = createClient(supabaseUrl, supabaseKey);