export default {
  type: 'object',
  properties: {
    type: { type: 'string' },
    table: { type: 'string' },
    schema: { type: 'string' },
    record: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        timestamp: { type: 'string' },
        message_id: { type: 'number' },
        author_user_id: { type: 'string' },
        conversation_id: { type: 'string' }
      }
    }
  },
  required: ['record']
} as const;
