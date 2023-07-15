import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AllBooks from "./pages/AllBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/add-book" element={<AddBook />} />
      <Route path="/books/details" element={<BookDetails />} />

      <Route path="/books" element={<AllBooks />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
