import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgentResponseModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StreamingDataService {
  private reader = new TextDecoder();

  private async fetch(url: string, endpoint: string, body: { [key: string]: any }) {
    const response = await fetch(`${url}${endpoint}`, {
      method: 'POST',
      headers: {},
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    if (!response.body) throw new Error('Response body is not readable');

    return response;
  }

  getStream(
    url: string,
    endpoint: string,
    body: { [key: string]: any },
  ): Observable<AgentResponseModel> {
    return new Observable<AgentResponseModel>((observer) => {
      const ac = new AbortController();

      (async () => {
        const response = await this.fetch(url, endpoint, body);
        const reader = response.body!.getReader();

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            observer.complete();
            break;
          }
          const chunk = this.reader.decode(value, { stream: true });
          observer.next(JSON.parse(chunk));
        }
      })();

      return () => ac.abort();
    });
  }
}
