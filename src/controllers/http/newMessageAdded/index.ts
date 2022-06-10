import schema from './schema';

export default {
  handler: 'src/controllers/http/newMessageAdded/handler.main',
  events: [
    {
      http: {
        method: 'post',
        path: 'new-group-message-added',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
};
