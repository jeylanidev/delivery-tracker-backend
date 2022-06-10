export default {
  type: 'object',
  properties: {
    message: { type: 'string' }
  },
  required: ['record']
} as const;
