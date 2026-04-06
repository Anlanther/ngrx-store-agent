import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BaseAgentService, Message, MessagePayload } from '../models';
import { MessageConverterService } from './message-converter-service';
import { StreamingDataService } from './streaming-data-service';

@Injectable({
  providedIn: 'root',
})
export class CoreDataService implements BaseAgentService {
  streamingDataService = inject(StreamingDataService);
  messageConverterService = inject(MessageConverterService);

  url = 'http://127.0.0.1:8000/';

  postResponse(payload: MessagePayload): Observable<Message> {
    return this.streamingDataService.getStream(this.url, 'core', {}).pipe(
      map((response) => ({
        ...this.messageConverterService.convertToMessage(response),
      })),
    );
  }
}
