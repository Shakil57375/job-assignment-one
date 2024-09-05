import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("/about-me");
  const [content, setContent] = useState(""); // For tab content

  // Set the initial content based on the active tab
  useEffect(() => {
    if (activeTab === "/about-me") {
      setContent(
        "Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a..."
      );
    } else if (activeTab === "/experience") {
      setContent(
        "Dave is an experienced sales representative at Salesforce, with three years of tenure at the company. He brings a wealth of knowledge in the industry, backed by a strong dedication to helping clients succeed. Born and raised in Albany, NY, Dave has lived in Santa Carla for the past decade with his wife Tiffany and their twin daughters, Emma and Ella..."
      );
    } else if (activeTab === "/recommended") {
      setContent(
        "I highly recommend Dave for his exceptional dedication and expertise in sales. His three years at Salesforce reflect his commitment and deep understanding of client needs. Dave’s ability to balance his professional responsibilities with his family life, including his involvement in his daughters early education, showcases his strong organizational skills..."
      );
    }
  }, [activeTab]);

  const handleSetActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-4 flex justify-between space-x-2 relative  bg-[#171717] p-2 rounded-3xl">
        {/* Tabs */}
        <Link to="/about-me">
          <motion.div
            className={`cursor-pointer px-4 py-2 transition text-[18px] font-medium font-poppins ${
              activeTab === "/about-me"
                ? "shadow-[0px_15px_60px_20px_rgba(0,0,0,0.99)] bg-[#28292F] rounded-[16px] text-white "
                : "text-[#A3ADB2]"
            }`}
            onClick={() => handleSetActiveTab("/about-me")}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.div>
        </Link>
        <Link to="/experience">
          <motion.div
            className={`cursor-pointer  px-4 py-2 transition text-[18px] font-medium font-poppins ${
              activeTab === "/experience"
                ? "shadow-[0px_15px_60px_20px_rgba(0,0,0,0.99)] bg-[#28292F] rounded-[16px] text-white"
                : "text-[#A3ADB2]"
            }`}
            onClick={() => handleSetActiveTab("/experience")}
            transition={{ duration: 0.3 }}
          >
            Experience
          </motion.div>
        </Link>
        <Link to="/recommended">
          <motion.div
            className={`cursor-pointer  px-4 py-2 transition text-[18px] font-medium font-poppins ${
              activeTab === "/recommended"
                ? "shadow-[0px_15px_60px_20px_rgba(0,0,0,0.99)] bg-[#28292F] text-white rounded-[16px] "
                : "text-[#A3ADB2]"
            }`}
            onClick={() => handleSetActiveTab("/recommended")}
            transition={{ duration: 0.3 }}
          >
            Recommended
          </motion.div>
        </Link>
      </div>

      {/* Smooth transition for the content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Ensure Framer Motion knows when to trigger animations
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className=" font-jakarta text-[#969696] text-xl leading-8	"
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
