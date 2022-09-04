import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/react-deploy" element={<Jobs />} />
      </Routes>
    </div>
  );
}

export default App;
