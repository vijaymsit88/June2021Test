import { Book } from '../models/book-item';
import * as LibraryActions from '../actions/library.actions';

const initialState: Book[] = [
  {
    name: 'Maths book',
    author: 'KC nag',
    price: 120.3,
  },
];

export function reducer(
  state = initialState,
  action: LibraryActions.Actions
): Book[] {
  switch (action.type) {
    case LibraryActions.ADD_BOOK:
      return [...state, action.payload];
    case LibraryActions.REMOVE_BOOK:
    default:
      return state;
  }
}
