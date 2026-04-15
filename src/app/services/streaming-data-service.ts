import { Injectable } from '@angular/core';
import { from, map, mergeMap, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StreamingDataService {
  private decoder = new TextDecoder();

  private async fetch(url: string, endpoint: string, body: { [key: string]: any }, format: string) {
    const headerOptions: HeadersInit =
      format === 'json' ? { 'Content-type': 'application/json' } : {};

    const response = await fetch(`${url}${endpoint}`, {
      method: 'POST',
      headers: { ...headerOptions },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    if (!response.body) throw new Error('Response body is not readable');

    return response;
  }

  getStream<T>(
    url: string,
    endpoint: string,
    body: { [key: string]: any },
    format = 'json',
  ): Observable<T> {
    return from(this.fetch(url, endpoint, body, format)).pipe(
      switchMap((response) => from(response.body as unknown as AsyncIterable<Uint8Array>)),
      map((chunk) => this.decoder.decode(chunk, { stream: true })),
      mergeMap((chunk) => chunk.split('\n').filter((c) => !!c)),
      map((c) => JSON.parse(c) as T),
    );
  }
}
