import { NewMessagePayload } from '@models/message';
import { getGroupAndUsers } from '@services/supabase';
import { sendNewMessageNotification } from '@services/one-signal';

export default async function (newMessagePayload: NewMessagePayload): Promise<void> {
  const { conversationId, authorUserId, message } = newMessagePayload;

  try {
    const { users, group } = await getGroupAndUsers(conversationId);
    const userIdsExcludingAuthor = users.filter((user) => user.id !== authorUserId).map((user) => user.id);
    const sender = users.find((user) => user.id === authorUserId);

    console.log('sender: ', sender);

    await sendNewMessageNotification(userIdsExcludingAuthor, sender.fullName, group.name, message);
  } catch (e) {
    console.log(e.message);
  }
}
