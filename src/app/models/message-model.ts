import { ResponseType } from '../constants';

export type Message = TextMessage | ChunksMessage | ThinkMessage | LogMessage;

export interface BaseMessage {
  origin: 'user' | 'agent';
}

export interface TextMessage extends BaseMessage {
  type: ResponseType.Text;
  text: string;
}

export interface ChunksMessage extends BaseMessage {
  type: ResponseType.Chunks;
  chunks: {
    documentId: string;
    chunkId: string;
    text: string;
    title: string;
  }[];
}

export interface ThinkMessage extends BaseMessage {
  type: ResponseType.Think;
  text: string;
}

export interface LogMessage extends BaseMessage {
  type: ResponseType.Log;
  log: string;
}
