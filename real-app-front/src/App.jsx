import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/signin";
import SignOut from "./components/signout";
import SignupBiz from "./components/signup_biz";
import MyCards from "./components/mycards";
import ProtectedRoute from "./components/common/protectedRoute";
import { ToastContainer } from "react-toastify";
import CreateCard from "./components/cardCreate";
import CardsDelete from "./components/cardsDelete";
import CardUpdate from "./components/cardUpdate";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100  ">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="#" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/sign-up_biz"
            element={<SignupBiz redirect="/mycards" />}
          />
          <Route path="/sign-in" element={<SignIn redirect="/" />} />
          <Route path="/sign-out" element={<SignOut />} />

          <Route
            path="/mycards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CreateCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mycards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsDelete />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mycards/update/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardUpdate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
