import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Chat />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
