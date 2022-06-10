export enum Urls {
  CreateNotification = '/api/v1/notifications'
}

interface LocaleMessage {
  en: string;
}

export interface PushNotification {
  app_id: string;
  headings: LocaleMessage;
  subtitle: LocaleMessage;
  contents: LocaleMessage;
  channel_for_external_user_ids: 'push';
  include_external_user_ids: string[];
}
