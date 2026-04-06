import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message, MessagePayload } from '../models';
import { BaseAgentService } from '../models/base-agent-service-model';
import { DataConverterService } from './data-converter-service';
import { StreamingDataService } from './streaming-data-service';

@Injectable({
  providedIn: 'root',
})
export class ResearchDataService implements BaseAgentService {
  streamingDataService = inject(StreamingDataService);
  messageConverterService = inject(DataConverterService);

  url = 'http://127.0.0.1:8000/';

  postResponse(payload: MessagePayload): Observable<Message> {
    return this.streamingDataService.getStream(this.url, 'research', payload).pipe(
      map((response) => ({
        ...this.messageConverterService.convertToMessage(response),
      })),
    );
  }
}
