export type IBook = {
  id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: Date | string;
  user?: {
    id: string;
    email: string;
  };
};

export type IBooksGetUrlPayload = {
  page: string;
  limit: number;
  searchTerm: string;
  genre: string;
  publicationYear: number;
};
