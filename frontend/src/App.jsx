import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./Users/addUser";
function App() {
  return (
    <div className="App">
      <div className="h-screen bg-gradient-to-b from-gray-900 via-gray-700 to-black">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
