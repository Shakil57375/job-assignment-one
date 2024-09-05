import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  // Initial images
  const [images, setImages] = useState([
    "https://media.licdn.com/dms/image/C4E03AQGgTRqOLj7Fqw/profile-displayphoto-shrink_200_200/0/1657481035502?e=2147483647&v=beta&t=opHVu5jMDr7u3_dyPdmCbb4Ngdw-zCm3V1M4kko-FYs", 
    "https://media.licdn.com/dms/image/D4E03AQHpiAa7jBt5uQ/profile-displayphoto-shrink_400_400/0/1722717024340?e=2147483647&v=beta&t=_XHtvEm8-pZPXlDgT6GGCUCJr_jdeYPS-E9b2gtVdJg",
    "https://media.licdn.com/dms/image/C4D03AQGZC5JaSKd_KQ/profile-displayphoto-shrink_200_200/0/1656648974031?e=2147483647&v=beta&t=tCnUrtOEoTPlSoeROtuHgcWP45w6HfNFDT5a3LXwUqQ",
    "https://createwebstudios.com/wp-content/uploads/2022/09/Gohar-420x470.jpg",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle Image Upload
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file); // Create a local URL for the uploaded file
      setImages((prev) => [...prev, newImageUrl]); // Add the new image to the state
      setCurrentIndex(images.length); // Show the newly added image immediately
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg relative">
    <h1 className="text-white text-2xl mb-4">Gallery</h1>

    {/* Carousel */}
    <div className="relative">
      <div className="flex justify-between items-center overflow-hidden">
        {/* Display 3 images */}
        {images.slice(currentIndex, currentIndex + 3).map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-1/3 px-2">
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="rounded-lg object-cover w-full h-40"
            />
          </div>
        ))}
      </div>

      {/* Arrows positioned at the top-right */}
      <div className="absolute top-0 right-0 flex space-x-2 p-4">
        <button
          onClick={handlePrev}
          className="text-white bg-gray-700 p-2 rounded-full cursor-pointer"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={handleNext}
          className="text-white bg-gray-700 p-2 rounded-full cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>

    {/* Add Image Button */}
    <div className="flex items-center space-x-4 mt-4">
      <label
        htmlFor="imageUpload"
        className="bg-gray-700 text-white px-4 py-2 rounded-lg cursor-pointer"
      >
        + ADD IMAGE
      </label>
      <input
        type="file"
        id="imageUpload"
        className="hidden"
        onChange={handleAddImage}
      />
    </div>
  </div>
  );
};

export default Gallery;
