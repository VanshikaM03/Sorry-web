

  import React, { useState } from "react";
  import "./App.css";
  
  const App = () => {
    const [messageVisible, setMessageVisible] = useState(false);
  
    const handleForgiveClick = () => {
      setMessageVisible(true);
    };
  const photos = [
    "/images/WhatsApp Image 2024-12-22 at 05.07.29_dd23d2d5.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.30_9c0383a1.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.30_29c30f20.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.30_e028d65c.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.31_d8767c94.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.29_dd23d2d5.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.30_9c0383a1.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.30_29c30f20.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.30_e028d65c.jpg",
    "/images/WhatsApp Image 2024-12-22 at 05.07.31_d8767c94.jpg"
   
  ];
    return (
      <div className="apology-page">
        <div className="carousel">
          <div className="carousel-track">
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Photo ${index + 1}`} className="carousel-image" />
            ))}
          </div>
        </div>
        <div className="content">
          <h1 className="title">I'm Sorry ❤️</h1>
          <p className="message">
            I know I’ve been selfish and toxic, and I deeply regret hurting you. 
            You mean everything to me, and I promise to be better. Please forgive me.
          </p>
          {!messageVisible ? (
            <button className="forgive-btn" onClick={handleForgiveClick}>
              Forgive Me?
            </button>
          ) : (
            <p className="call-message">Please call me now ❤️</p>
          )}
        </div>
      </div>
    );
  };
  
  export default App;
  
