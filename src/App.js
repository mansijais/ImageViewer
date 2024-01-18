import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import './style.css'
function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = [
    "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=sph",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
    "https://st.depositphotos.com/28379836/61073/i/450/depositphotos_610736028-stock-photo-fantasy-background-magic-forest-road.jpg",
    "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
    "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=sph",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
    "https://st.depositphotos.com/28379836/61073/i/450/depositphotos_610736028-stock-photo-fantasy-background-magic-forest-road.jpg"

  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(null);
    setIsViewerOpen(false);
  };

  const handleNextImage = () => {
    if (currentImage !== null && currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImage !== null && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  useEffect(() => {
    const defaultImageIndex = 2;
    setCurrentImage(defaultImageIndex);
    setIsViewerOpen(true);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {isViewerOpen && currentImage !== null && (
        <div className="viewer-container">
          <button className="close-button" onClick={closeImageViewer}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button
            className={`navigation-button prev-button ${currentImage > 0 ? "" : "disabled"}`}
            onClick={handlePrevImage}
            disabled={currentImage <= 0}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <img
            src={images[currentImage]}
            alt=""
            className="displayed-image"
          />
          <button
            className={`navigation-button next-button ${currentImage < images.length - 1 ? "" : "disabled"}`}
            onClick={handleNextImage}
            disabled={currentImage >= images.length - 1}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}

      <div style={{ position: "fixed", bottom: 0, width: "100%", background: "white", display: "flex", justifyContent: "center" }}>
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="180"
            key={index}
            className={`thumbnail ${index === currentImage ? "selected" : ""}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default App;