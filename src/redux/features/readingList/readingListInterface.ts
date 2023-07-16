import { IUser } from "../auth/authInterface";
import { IBook } from "../books/booksInterface";

export type IReadingList = {
  id?: string;
  finshedReading: boolean;
  book: IBook;
  user: IUser;
};
