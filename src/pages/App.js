import { useState, useEffect } from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LoginForm from "./LoginForm";
import AlbumsPage from "./AlbumsPage";
import PhotosPage from "./PhotosPage";
import SignupForm from "./SignupForm";
import Footer from "./Footer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route exact path="/" element={<Home user={user} />} />
            <Route path="/albums" element={<AlbumsPage user={user} />} />
            <Route path="/photos" element={<PhotosPage user={user} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginForm setUser={setUser} />} />
            <Route path="/signup" element={<SignupForm setUser={setUser} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
