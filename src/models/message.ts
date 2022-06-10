export interface NewMessagePayload {
  message: string;
  timestamp: string;
  messageId: number;
  authorUserId: string;
  conversationId: string;
}
