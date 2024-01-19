import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import './style.css'
function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("nature");

  const images = useMemo(() => [
    { type: "nature", url: "https://media.istockphoto.com/id/1044284546/photo/atlantic-forest-in-brazil-mata-atlantica.webp?b=1&s=170667a&w=0&k=20&c=v2Z4r64DJKKgWRYb8r9CCPSbxfWnrgiuie2Ns7GmmUc=" },
    { type: "nature", url: "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg" },
    { type: "nature", url: "https://media.istockphoto.com/id/1050241950/photo/rays-of-light-falling-on-the-road-through-the-trees-of-sanjay-gandhi-national-park-india.webp?b=1&s=170667a&w=0&k=20&c=QOP0nD9Xv-QMGIQhdwe9r_MWHGM348ctInZOvQeGVu4=" },
    { type: "nature", url: "https://media.istockphoto.com/id/1211692525/photo/group-of-wild-elephants-walking-in-the-tropical-rainforest-meadow-field-at-sunrise.webp?b=1&s=170667a&w=0&k=20&c=ACGAmYMz35cqW01_ZSjp9pFOsNXqJ97-3uJKNHiNaZo=" },
    { type: "nature", url: "https://media.istockphoto.com/id/467233280/photo/nepal-jungle.webp?b=1&s=170667a&w=0&k=20&c=qHaFk4xP60eWBrWML0Q6zA6juxBMWfNmmKsrTdUfIck=  " },
    { type: "landscape", url: "https://media.istockphoto.com/id/663874486/photo/northern-lights-in-mount-kirkjufell-iceland-with-a-man-passing-by.webp?b=1&s=170667a&w=0&k=20&c=BmgcdSO5-77L2A-mcqTxnEWJL-R3SVMmshiDLTqbBlk=" },
    { type: "landscape", url: "https://media.istockphoto.com/id/991108160/photo/town-of-husavik-at-sunset-north-coast-of-iceland.webp?b=1&s=170667a&w=0&k=20&c=CHhss1hwy0mPMITwSGPt6e3kyswEDOl6604__N424os=" },
    { type: "landscape", url: "https://media.istockphoto.com/id/955980652/photo/sigoldufoss-in-iceland.webp?b=1&s=170667a&w=0&k=20&c=TJRHKO9ahho-ReyX3vMCGwRrDNxk2UZTNoKEbN2ZuvM=" },
    { type: "landscape", url: "https://st.depositphotos.com/28379836/61073/i/450/depositphotos_610736028-stock-photo-fantasy-background-magic-forest-road.jpg" },
    { type: "landscape", url: "https://media.istockphoto.com/id/538653565/photo/hikers-under-the-northern-lights.webp?b=1&s=170667a&w=0&k=20&c=Z6VE3_yDXYj3gjobLPy2HXS30Av9yOi2sUpV3aNnUeE=" },
    { type: "animal", url: "https://media.istockphoto.com/id/1470055677/photo/exotic-nicobar-pigeon.webp?b=1&s=170667a&w=0&k=20&c=dOJwllI79qPiNoK8FATRw4szlJpicVhVrdGRN_rgbpE=" },
    { type: "animal", url: "https://media.istockphoto.com/id/1296353202/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.webp?b=1&s=170667a&w=0&k=20&c=V7xWUoxCh1k13z4-RaJ_gFQ0m-G3vCsTZmX2nx6ucVI=" },
    { type: "animal", url: "https://media.istockphoto.com/id/992637094/photo/british-short-hair-cat-and-golden-retriever.webp?b=1&s=170667a&w=0&k=20&c=ilIykSGp9Eyg7vfc2yggmtrktZEbNPYJ8mDupQD6eMM=" },
    { type: "animal", url: "https://media.istockphoto.com/id/1033274766/photo/cubs-with-mom.webp?b=1&s=170667a&w=0&k=20&c=HspUVL4mHA88DYwr4dnk23q1XJmSLOP9NGquhQpvkQM=" },
    { type: "animal", url: "https://media.istockphoto.com/id/505913924/photo/eating-wild-male-cheetal-deer.webp?b=1&s=170667a&w=0&k=20&c=Kdj6O9UjvQZrdJNPJFZ29ZQRakqwMlSEm870VKhjqKk=" },

  ], []);

  const filteredImages = useMemo(() => images.filter((image) => selectedType === "all" || image.type === selectedType), [images, selectedType]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(null);
    setIsViewerOpen(false);
  };

  const handleNextImage = () => {
    if (currentImage !== null && currentImage < filteredImages.length - 1) {
      setCurrentImage((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImage !== null && currentImage > 0) {
      setCurrentImage((prevIndex) => prevIndex - 1);
    }
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setCurrentImage(null); // Reset current image when changing the image type
    setIsViewerOpen(false);
  };

  useEffect(() => {
    const defaultImageIndex = 2;
    setCurrentImage(defaultImageIndex);
    setIsViewerOpen(true);
  }, [filteredImages]);

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
            src={filteredImages[currentImage].url}
            alt=""
            className="displayed-image"
          />
          <button
            className={`navigation-button next-button ${currentImage < filteredImages.length - 1 ? "" : "disabled"}`}
            onClick={handleNextImage}
            disabled={currentImage >= filteredImages.length - 1}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}

      <div style={{ position: "fixed", bottom: 0, width: "100%", background: "white", display: "flex", justifyContent: "center" }}>
        <div className="dropdown-container">
          <label htmlFor="imageType">Select Image Type:</label>
          <select id="imageType" value={selectedType} onChange={handleTypeChange}>
            <option value="nature">Nature</option>
            <option value="landscape">Landscape</option>
            <option value="animal">Animal</option>
          </select>
        </div>

        <div className="thumbnail-bar">
          {filteredImages.map((image, index) => (
            <img
              src={image.url}
              onClick={() => openImageViewer(index)}
              width="180"
              key={index}
              className={`thumbnail ${index === currentImage ? "selected" : ""}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;