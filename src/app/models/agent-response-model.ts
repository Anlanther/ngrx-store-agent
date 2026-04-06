import { ResponseType } from '../constants';

export type AgentResponse = TextResponse | ChunksResponse | LogResponse | ThinkResponse;

interface BaseResponse {
  type: ResponseType;
}

interface TextResponse extends BaseResponse {
  type: ResponseType.Text;
  text: string;
}

interface ChunksResponse extends BaseResponse {
  type: ResponseType.Chunks;
  chunks: {
    document_id: string;
    chunk_id: string;
    text: string;
    title: string;
  }[];
}

interface LogResponse extends BaseResponse {
  type: ResponseType.Log;
  log: string;
}

interface ThinkResponse extends BaseResponse {
  type: ResponseType.Think;
  text: string;
}
