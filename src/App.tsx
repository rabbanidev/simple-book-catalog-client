import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import useAuthCheck from "./hooks/useAuthCheck";
import EditBook from "./pages/EditBook";
import WishList from "./pages/WishList";
import ReadingList from "./pages/ReadingList";
import PrivateOutlet from "./routes/PrivateOutlet";

function App() {
  const authCheck = useAuthCheck();

  return (
    authCheck && (
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<PrivateOutlet />}>
          <Route path="wishlist" element={<WishList />} />
          <Route path="reading-list" element={<ReadingList />} />
          <Route path="books/add-new-book" element={<AddBook />} />
          <Route path="books/edit/:id" element={<EditBook />} />
        </Route>

        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books" element={<AllBooks />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    )
  );
}

export default App;
