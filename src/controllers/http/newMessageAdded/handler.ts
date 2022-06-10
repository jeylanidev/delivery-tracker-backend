import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { NewMessagePayload } from '@models/message';
import newGroupMessageAdded from '@use-cases/newGroupMessageAdded';

export const newMessageAdded: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { message, message_id, timestamp, conversation_id, author_user_id } = event.body.record;
  const newMessagePayload: NewMessagePayload = {
    message,
    messageId: message_id,
    authorUserId: author_user_id,
    conversationId: conversation_id,
    timestamp
  };

  await newGroupMessageAdded(newMessagePayload);

  // return formatJSONResponse({
  //   message: `something happened`,
  //   event
  // });
  return formatJSONResponse({
    message: `Hello ${newMessagePayload.message} ${message_id} ${timestamp} ${conversation_id} ${author_user_id}, welcome to the exciting Serverless world!`,
    event
  });
};

export const main = middyfy(newMessageAdded);
