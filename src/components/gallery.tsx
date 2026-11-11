import { useState } from "react";

// Importando as imagens
import image01 from "../assets/images/Image 01.png";
import image02 from "../assets/images/Image 02.png";
import image03 from "../assets/images/Image 03.png";
import image04 from "../assets/images/Image 04.png";
import image05 from "../assets/images/Image 05.png";
import image06 from "../assets/images/Image 06.png";
import image07 from "../assets/images/Image 07.png";
import image08 from "../assets/images/Image 08.png";
import image09 from "../assets/images/Image 09.png";
import image10 from "../assets/images/Image 10.png";
import image11 from "../assets/images/Image 11.png";
import image12 from "../assets/images/Image 12.png";

function Gallery() {
  // Guarda quais fotos foram curtidas
  const [likedImages, setLikedImages] = useState([]);

  // Adiciona ou remove uma foto dos favoritos
  function handleLike(image) {
    if (likedImages.includes(image)) {
      setLikedImages(likedImages.filter((item) => item !== image));
    } else {
      setLikedImages([...likedImages, image]);
    }
  }

  return (
    <main className="gallery">
      {/* Foto 1 */}
      <div className="photo">
        <img src={image01} alt="Travel photo 1" />
        <button onClick={() => handleLike(image01)}>
          {likedImages.includes(image01) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 2 */}
      <div className="photo">
        <img src={image02} alt="Travel photo 2" />
        <button onClick={() => handleLike(image02)}>
          {likedImages.includes(image02) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 3 */}
      <div className="photo">
        <img src={image03} alt="Travel photo 3" />
        <button onClick={() => handleLike(image03)}>
          {likedImages.includes(image03) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 4 */}
      <div className="photo">
        <img src={image04} alt="Travel photo 4" />
        <button onClick={() => handleLike(image04)}>
          {likedImages.includes(image04) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 5 */}
      <div className="photo">
        <img src={image05} alt="Travel photo 5" />
        <button onClick={() => handleLike(image05)}>
          {likedImages.includes(image05) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 6 */}
      <div className="photo">
        <img src={image06} alt="Travel photo 6" />
        <button onClick={() => handleLike(image06)}>
          {likedImages.includes(image06) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 7 */}
      <div className="photo">
        <img src={image07} alt="Travel photo 7" />
        <button onClick={() => handleLike(image07)}>
          {likedImages.includes(image07) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 8 */}
      <div className="photo">
        <img src={image08} alt="Travel photo 8" />
        <button onClick={() => handleLike(image08)}>
          {likedImages.includes(image08) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 9 */}
      <div className="photo">
        <img src={image09} alt="Travel photo 9" />
        <button onClick={() => handleLike(image09)}>
          {likedImages.includes(image09) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 10 */}
      <div className="photo">
        <img src={image10} alt="Travel photo 10" />
        <button onClick={() => handleLike(image10)}>
          {likedImages.includes(image10) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 11 */}
      <div className="photo">
        <img src={image11} alt="Travel photo 11" />
        <button onClick={() => handleLike(image11)}>
          {likedImages.includes(image11) ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Foto 12 */}
      <div className="photo">
        <img src={image12} alt="Travel photo 12" />
        <button onClick={() => handleLike(image12)}>
          {likedImages.includes(image12) ? "❤️" : "🤍"}
        </button>
      </div>
    </main>
  );
}

export default Gallery;
