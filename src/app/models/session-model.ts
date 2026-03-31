import { Conversation } from './conversation-model';

export interface Session {
  id: string;
  title: string;
  conversations: Conversation[];
  createdAt: string;
}
