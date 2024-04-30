import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-sky-400 to-purple-500 p-4 text-white text-center">
      <Link to="/buttons" className="mx-4 hover:underline">
        Buttons
      </Link>
      <Link to="/floatbutton" className="mx-4 hover:underline">
            FloatButtons
      </Link>
      <Link to="/icons" className="mx-4 hover:underline">
            Icons
      </Link>
      <Link to="/typography" className="mx-4 hover:underline">
            Typography
      </Link>
      <Link to="/divider" className="mx-4 hover:underline">
            devider
      </Link>
    </nav>
  );
}

export default Navbar;
