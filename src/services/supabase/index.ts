import { User } from '@models/user';
import { Group } from '@models/group';
import { DatabaseTables } from '@services/supabase/types';
import { supabase } from '@libs/supabase';

interface GroupAndUsers {
  group: Group;
  users: User[];
}

const getGroup = async (conversationId: string): Promise<Group> => {
  const { error, data } = await supabase
    .from(DatabaseTables.GROUP)
    .select('group_id, group_name')
    .match({ conversation_id: conversationId });

  if (error) throw new Error(error.message);
  if (!data || data.length <= 0) console.log('nothing found');

  return { id: data[0].group_id, name: data[0].group_name };
};

const getParticipants = async (group_id: string): Promise<User[]> => {
  const { error, data } = await supabase
    .from(DatabaseTables.PARTICIPANT)
    .select('group_id, user_id ( full_name, user_id )')
    .match({ group_id });

  if (error) throw new Error(error.message);
  if (!data || data.length <= 0) console.log('nothing found');

  return data.map((user) => ({
    id: user.user_id.user_id,
    fullName: user.user_id.full_name
  }));
};

export const getGroupAndUsers = async (conversationId: string): Promise<GroupAndUsers> => {
  const group = await getGroup(conversationId);
  const users = await getParticipants(group.id);

  return {
    group,
    users
  };
};
