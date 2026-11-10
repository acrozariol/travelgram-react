import profilePic from "../assets/Profile pic.png";

import mapPin from "../assets/icons/MapPin.svg";
import airplaneTilt from "../assets/icons/AirplaneTilt.svg";
import imageIcon from "../assets/icons/Image.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div id="profile">
          <img src={profilePic} alt="Imagem de Isabela Torres" />

          <div>
            <h1>Isabela Torres</h1>

            <p>
              Amante de viagens, cultura e gastronomia. 🌍✈️
              <br />
              Aqui compartilho as histórias registradas em cada clique,
              explorando cantinhos fascinantes do nosso planeta a partir da
              movimentada cidade de São Paulo. 🏙️📸
            </p>
          </div>
        </div>

        <ul id="info">
          <li>
            <img src={mapPin} alt="Ícone de mapa" />
            <span>São Paulo, Brazil</span>
          </li>

          <li>
            <img src={airplaneTilt} alt="Ícone de avião" />
            <span>37 países</span>
          </li>

          <li>
            <img src={imageIcon} alt="Ícone de imagem" />
            <span>240 fotos</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
