import { Home } from "./page/home";
import { SingleData } from "./page/single-data";
import { Routes, Route, Link } from "react-router-dom";
import { UserPage } from "./page/user-page";

function App() {
  return (
    <div className="container">
      <Link to="/user">User</Link>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<SingleData />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
