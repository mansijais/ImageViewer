import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
function App() {

  const [currentImage, setCurrentImage] = useState(0);
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
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {!isViewerOpen && (
        <div style={{ textAlign: "center", padding: "20px", fontSize: "24px", fontWeight: "bold", color: "#333" }}>
          Explore the Gallery
          <br />
          Click on an image to start viewing
        </div>

      )}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}

      <div style={{ position: "fixed", bottom: 0, width: "100%", background: "white", display: "flex", justifyContent: "center" }}>
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="150"
            key={index}
            style={{ margin: "2px" }}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
export default App;
