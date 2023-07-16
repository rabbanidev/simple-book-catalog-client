import { IUser } from "../auth/authInterface";
import { IBook } from "../books/booksInterface";

export type IReview = {
  id: string;
  text: string;
  book: IBook;
  user: IUser;
};
