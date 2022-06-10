import { createClient } from '@supabase/supabase-js';
import { config } from '@config/index';

const { supabaseUrl, supabaseKey } = config;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  schema: 'app'
});
