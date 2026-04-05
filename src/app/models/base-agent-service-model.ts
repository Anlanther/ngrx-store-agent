import { Observable } from 'rxjs';
import { AgentResponseModel } from './agent-response-model';
import { MessagePayload } from './message-payload-model';

export interface BaseAgentService {
  postResponse(payload: MessagePayload): Observable<AgentResponseModel>;
}
