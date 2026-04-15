import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AgentResponse, BaseAgentService, Message, MessagePayload } from '../models';
import { DataConverterService } from './data-converter-service';
import { StreamingDataService } from './streaming-data-service';

@Injectable({
  providedIn: 'root',
})
export class CoreDataService implements BaseAgentService {
  streamingDataService = inject(StreamingDataService);
  messageConverterService = inject(DataConverterService);

  url = 'http://127.0.0.1:8000/';

  postResponse(payload: MessagePayload): Observable<Message> {
    return this.streamingDataService.getStream<AgentResponse>(this.url, 'core', payload).pipe(
      map((response) => ({
        ...this.messageConverterService.convertToMessage(response),
      })),
    );
  }
}
