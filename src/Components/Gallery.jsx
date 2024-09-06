import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  // Initial images array
  const [images, setImages] = useState([
    "https://media.licdn.com/dms/image/C4E03AQGgTRqOLj7Fqw/profile-displayphoto-shrink_200_200/0/1657481035502?e=2147483647&v=beta&t=opHVu5jMDr7u3_dyPdmCbb4Ngdw-zCm3V1M4kko-FYs",
    "https://media.licdn.com/dms/image/D4E03AQHpiAa7jBt5uQ/profile-displayphoto-shrink_400_400/0/1722717024340?e=2147483647&v=beta&t=_XHtvEm8-pZPXlDgT6GGCUCJr_jdeYPS-E9b2gtVdJg",
    "https://media.licdn.com/dms/image/C4D03AQGZC5JaSKd_KQ/profile-displayphoto-shrink_200_200/0/1656648974031?e=2147483647&v=beta&t=tCnUrtOEoTPlSoeROtuHgcWP45w6HfNFDT5a3LXwUqQ",
    "https://createwebstudios.com/wp-content/uploads/2022/09/Gohar-420x470.jpg",
  ]);

  // Track the first visible image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next Arrow Click
  const handleNext = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle Previous Arrow Click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle Image Upload
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file); // Create a local URL for the uploaded file
      setImages((prev) => [...prev, newImageUrl]); // Add the new image to the array
    }
  };

  // Determine how many images to show based on currentIndex
  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="w-[720px] md:w-[770px] mx-auto bg-[#363C43] p-6 rounded-[19px] shadow-lg relative h-[320px]">
      <div className="flex items-center justify-between">
        <label className="bg-[#171717] text-white py-3 px-6 rounded-[20px] cursor-pointer text-4xl font-medium font-poppins">
          Gallery
        </label>

        {/* Add Image Button */}
        <div className="flex items-center justify-between gap-6">
          <label
            htmlFor="imageUpload"
            className="bg-gray-600 text-white px-5 py-3 rounded-[25px] cursor-pointer shadow-[-3px_-3px_9px_#ffffff70,8px_10px_15px_#000000b5]"
          >
            + ADD IMAGE
          </label>
          <div>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              onChange={handleAddImage}
            />

            <div className="flex gap-3">
                {/* Arrows positioned at the top-right */}
            <button
              onClick={handlePrev}
              className="text-white bg-gray-700 h-[45px] w-[45px] rounded-full cursor-pointer bg-gradient-to-r from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]"
            >
              <FaArrowLeft className="mx-auto text-[#6F787C]" />
            </button>

            <button
              onClick={handleNext}
              className="text-white h-[45px] w-[45px] bg-gray-700 p-2 rounded-full cursor-pointer bg-gradient-to-l from-[#303439] to-[#161718] shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]"
            >
              <FaArrowRight className="mx-auto text-[#6F787C]" />
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex justify-between items-center space-x-2 relative top-8">
        {/* Display the visible images */}
        {visibleImages.map((img, idx) => (
          <div key={idx} className={`w-${12 / visibleImages.length}/12 px-2`}>
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="rounded-[24px] object-cover w-[190px] h-[179px] "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
