import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Random from "./Pages/Random.jsx";
import Notice from "./Pages/Notice.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Notice />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/random-problem"} element={<Random />} />
      </Routes>
    </>
  );
}
export default App;
