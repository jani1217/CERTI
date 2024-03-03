import React from 'react';
import './ImageSlider.css';

const certificates = [
  { id: 1, imageUrl: 'https://i.pinimg.com/564x/da/32/1b/da321bd361fb92f3697c0a8febb92eb3.jpg' },
  { id: 2, imageUrl: 'https://i.pinimg.com/236x/60/ad/ca/60adca4473e9cec21d139d6081f57626.jpg' },
  { id: 3, imageUrl: 'https://img.freepik.com/free-vector/classy-ornamental-certificate-template-beige-black_53876-116396.jpg' },
  // Add more certificates as needed
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {certificates.map((certificate) => (
          <div key={certificate.id} className="slide">
            <img src={certificate.imageUrl} alt={`Certificate ${certificate.id}`} />
            <div className="overlay">
              <button className="preview">Preview</button>
              <button className="edit">Edit</button>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
