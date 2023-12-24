import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
// import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
