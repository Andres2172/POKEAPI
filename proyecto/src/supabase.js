import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'bd01c228-5130-4a3e-bd0b-c069187ddf45';
const supabaseKey = 'aqui el codigo de supabaseeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbG1xeGtranNycmlmY25jZmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzY3MjYsImV4cCI6MjA2MjkxMjcyNn0.s2hYT4u_R0_qvQc1QjBoXoi7rF37vAKGoJ8mkcZZiaw';
export const supabase = createClient(supabaseUrl, supabaseKey);