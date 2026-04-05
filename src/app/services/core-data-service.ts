import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgentResponseModel, BaseAgentService, MessagePayload } from '../models';
import { StreamingDataService } from './streaming-data-service';

@Injectable({
  providedIn: 'root',
})
export class CoreDataService implements BaseAgentService {
  streamingDataService = inject(StreamingDataService);

  url = 'http://127.0.0.1:8000/';

  postResponse(payload: MessagePayload): Observable<AgentResponseModel> {
    return this.streamingDataService.getStream(this.url, 'core', {});
  }
}
