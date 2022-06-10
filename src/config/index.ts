type Config = {
  supabaseUrl: string;
  supabaseKey: string;
  oneSignalServerUrl: string;
  oneSignalAppId: string;
  oneSignalApiKey: string;
};

export const config: Config = {
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_ANON_KEY,
  oneSignalServerUrl: process.env.ONESIGNAL_SERVER_URL,
  oneSignalAppId: process.env.ONESIGNAL_APP_ID,
  oneSignalApiKey: process.env.ONESIGNAL_API_KEY
};
