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
  page?: number;
  limit?: number;
  searchTerm?: string | null;
  genre?: string | null;
  publicationYear?: number | null;
};
