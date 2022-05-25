import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Components/AddItems/AddItems";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Products from "./Components/Home/Products";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import SocialLogin from "./Components/Login/SocialLogin";
import ManazeInventories from "./Components/ManazeInventories/ManazeInventories";
import MyItems from "./Components/MyItems/MyItems";
import RequireAuth from "./Components/MyItems/RequireAuth/RequireAuth";
import NotFound from "./Components/NotFound/NotFound";
import Nav from "./Components/Shared/Nav";
import UpdateInventory from "./Components/UpdateInventory/UpdateInventory";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/socialLogin" element={<SocialLogin />} />
        <Route path="/myProducts" element={<MyItems />} />
        <Route path="/addItem" element={<AddItems />} />
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManazeInventories />
            </RequireAuth>
          }
        />
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <UpdateInventory />
            </RequireAuth>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
