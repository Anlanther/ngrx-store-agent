export type AgentResponseModel = TextResponse | ChunksResponse | LogResponse | ThinkResponse;

enum Type {
  Text = 'text',
  Log = 'log',
  Chunks = 'chunks',
  Think = 'think',
}

interface BaseResponse {
  type: Type;
}

interface TextResponse extends BaseResponse {
  type: Type.Text;
  text: string;
}

interface ChunksResponse extends BaseResponse {
  type: Type.Chunks;
  chunks: {
    document_id: string;
    chunk_id: string;
    text: string;
    title: string;
  }[];
}

interface LogResponse extends BaseResponse {
  type: Type.Log;
  log: string;
}

interface ThinkResponse extends BaseResponse {
  type: Type.Think;
  text: string;
}
