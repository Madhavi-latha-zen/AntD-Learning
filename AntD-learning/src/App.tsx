import Buttons from "./Components/Buttons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FloatButtons from "./Components/FloatButton";
import Icons from "./Components/Icons";
import Typographys from "./Components/Typograpy";
import Devider from "./Components/Devider";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/floatbutton" element={<FloatButtons />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/typography" element={<Typographys />} />
        <Route path="/divider" element={<Devider />} />
      </Routes>
    </Router>
  );
}

export default App;
