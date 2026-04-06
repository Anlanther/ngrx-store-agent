import { Injectable } from '@angular/core';
import { ResponseType } from '../constants';
import { AgentResponse, Message } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MessageConverterService {
  convertToMessage(response: AgentResponse): Message {
    switch (response.type) {
      case ResponseType.Text:
        return {
          type: ResponseType.Text,
          origin: 'agent',
          text: response.text,
        };
      case ResponseType.Chunks:
        return {
          type: ResponseType.Chunks,
          origin: 'agent',
          chunks: response.chunks.map((chunk) => ({
            documentId: chunk.document_id,
            chunkId: chunk.chunk_id,
            text: chunk.text,
            title: chunk.title,
          })),
        };
      case ResponseType.Think:
        return {
          type: ResponseType.Think,
          origin: 'agent',
          text: response.text,
        };
      default:
        throw new Error(`Unsupported response type: ${response.type}`);
    }
  }
}
