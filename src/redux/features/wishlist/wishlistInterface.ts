import { IUser } from "../auth/authInterface";
import { IBook } from "../books/booksInterface";

export type IWishList = {
  id?: string;
  book: IBook;
  user: IUser;
};
