import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
