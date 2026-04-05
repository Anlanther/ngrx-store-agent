export interface MessagePayload {
  queryParams: { [key: string]: any };
  sessionId: string;
  message: string;
}
