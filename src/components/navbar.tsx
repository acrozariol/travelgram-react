import logo from "../assets/Logo.svg";
import searchIcon from "../assets/icons/MagnifyingGlass.svg";
import profilePic from "../assets/Profile pic.png";

function Navbar() {
  return (
    <nav className="container">
      <a href="#" id="logo">
        <img src={logo} alt="Logomarca" />
      </a>

      <ul id="primary-menu">
        <li>
          <a href="#">
            <img src={searchIcon} alt="Ícone de lupa" />
          </a>
        </li>

        <li>
          <a href="#">Explorer</a>
        </li>

        <li>
          <a href="#">My travels</a>
        </li>

        <li>
          <a href="#">
            <img src={profilePic} alt="Imagem de Isabela Torres" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
