import { Observable } from 'rxjs';
import { Message } from './message-model';
import { MessagePayload } from './message-payload-model';

export interface BaseAgentService {
  postResponse(payload: MessagePayload): Observable<Message>;
}
