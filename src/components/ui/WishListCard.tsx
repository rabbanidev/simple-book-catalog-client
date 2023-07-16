import { Link } from "react-router-dom";
import { IWishList } from "../../redux/features/wishlist/wishlistInterface";
import DeleteButton from "./DeleteButton";
import { useDeleteWishListItemMutation } from "../../redux/features/wishlist/wishlistApi";
import Edit from "../../icon/Edit";

type IProps = {
  wishItem: IWishList;
};

const WishListCard = ({ wishItem }: IProps) => {
  const [deleteWishListItem] = useDeleteWishListItemMutation();
  const { book, id } = wishItem;

  const year = new Date(book.publicationDate).getFullYear();
  const month = new Date(book.publicationDate).getMonth();
  const date = new Date(book.publicationDate).getDate();
  const publicationDateYear = `${date}/${month}/${year}`;

  const deleteHandler = (id: string) => {
    deleteWishListItem(id);
  };

  return (
    <div className="min-h-[210px] block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900">
        {book.title}
      </h5>
      <p className="font-medium text-gray-700">{book.author}</p>
      <p className="font-normal text-gray-700 capitalize">
        Genre: {book.genre}
      </p>
      <p className="font-normal text-gray-700">
        Publication Date: {publicationDateYear}
      </p>
      <div className="mt-4 flex gap-x-4">
        <DeleteButton handler={() => deleteHandler(id as string)} />
        <Link
          to={`/books/${book.id}`}
          className="font-normal text-sm p-2 rounded-[4px] bg-[#5D5FEF] text-white shadow-lg hover:bg-[#2a2ddd]"
        >
          <Edit />
        </Link>
      </div>
    </div>
  );
};

export default WishListCard;
