export interface Conversation<T extends QnAPairMetadata = QnAPairMetadata> {
  id: string;
  messages: QnAPair<T>[];
}

export interface QnAPair<T extends QnAPairMetadata> {
  question: string;
  answer: T;
}

export interface QnAPairMetadata {
  status: 'pending' | 'answered' | 'error';
}
