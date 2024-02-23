import Navbar from "./navbar";
import Home from "./home";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path = "/create" element={<Create/>}></Route>
            <Route path = "/blogs/:id" element={<BlogDetails/>}></Route>

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
