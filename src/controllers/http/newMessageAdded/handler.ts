import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';


export const newMessageAdded: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { message } = event.body;

  return formatJSONResponse({
    message: `Hello ${message}, welcome to the exciting Serverless world!`,
    event
  });
};

export const main = middyfy(newMessageAdded);
