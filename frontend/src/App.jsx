import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./Users/addUser";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="h-screen bg-gradient-to-b from-gray-900 via-gray-700 to-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
          <Routes>
            <Route path="/add-user" element={<AddUser/>} />
          </Routes>
         
        </div>
      </Router>
    </div>
  );
}

export default App;
