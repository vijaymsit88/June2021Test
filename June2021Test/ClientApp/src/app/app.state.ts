import { Book } from './models/book-item';

export interface AppState {
  readonly books: Book[];
}
