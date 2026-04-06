import { Message } from './message-model';

export interface Session {
  id: string;
  title: string;
  conversations: Message[];
  createdAt: string;
}
