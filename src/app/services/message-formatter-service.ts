import { Injectable } from '@angular/core';
import { Marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MessageFormatterService {
  marked = new Marked({ async: false });

  REGEX_HANDLER_MAP: Map<RegExp, string> = new Map([
    [/\[(chunk\d+)\]/, '<app-citation></app-citation>'],
  ]);

  formatMdToHtml(md: string): string {
    let htmlString = this.marked.parse(md) as string;
    this.REGEX_HANDLER_MAP.forEach((handler, regex) => {
      htmlString = htmlString.replace(regex, handler);
    });

    return htmlString;
  }
}
