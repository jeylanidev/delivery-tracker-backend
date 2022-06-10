import { PushNotification, Urls } from './types';
import apiClient from '@libs/axios';
import { config } from '@config/index';

const generateMessage = (
  recipients: string[],
  senderFullName: string,
  groupName: string,
  message: string
): PushNotification => {
  return {
    app_id: config.oneSignalAppId,
    channel_for_external_user_ids: 'push',
    headings: { en: senderFullName },
    subtitle: { en: groupName },
    contents: { en: message },
    include_external_user_ids: recipients
  };
};

export const sendNewMessageNotification = async (
  recipients: string[],
  senderFullName: string,
  groupName: string,
  message: string
): Promise<void> => {
  const pushNotificationMessage = generateMessage(recipients, senderFullName, groupName, message);

  await apiClient.post(Urls.CreateNotification, pushNotificationMessage);
};
