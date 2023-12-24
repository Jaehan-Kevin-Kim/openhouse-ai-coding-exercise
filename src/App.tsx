import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import "antd/dist/reset.css";

// import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
