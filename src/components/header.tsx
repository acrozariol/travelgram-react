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
            <h1>Mandy</h1>

            <p>
              Travel lover with a passion for culture and gastronomy. 🌍✈️
              <br />
              Here, I share the stories behind every snapshot, exploring
              fascinating corners of our planet, one adventure at a time, from
              the vibrant city of Toronto 🇨🇦📸
            </p>
          </div>
        </div>

        <ul id="info">
          <li>
            <img src={mapPin} alt="Ícone de mapa" />
            <span>Toronto, Canada</span>
          </li>

          <li>
            <img src={airplaneTilt} alt="Ícone de avião" />
            <span>37 countries</span>
          </li>

          <li>
            <img src={imageIcon} alt="Ícone de imagem" />
            <span>240 pictures</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
