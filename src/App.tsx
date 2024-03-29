import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [scream, setScream] = useState(false);

  return (
    <div className="bg-blue-50/25 rounded-2xl w-96 h-96 flex justify-center items-center">
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="w-32 h-32 bg-gradient-to-br from-lime-300 to-lime-500 cursor-pointer"
        onClick={() => setScream(!scream)}>
        <div className="flex gap-4 justify-center mt-8 bg-gradient-to-r from-blue-300 to-blue-200 py-2">
          <div className="w-10 h-5 bg-white rounded-b-full flex items-top justify-center">
            <div className="w-4 h-2 bg-black rounded-b-full animate-pulse" />
          </div>
          <div className="w-10 h-5 bg-white rounded-b-full flex items-top justify-center">
            <div className="w-4 h-2 bg-black rounded-b-full animate-pulse" />
          </div>
        </div>
        <div
          className={`${"w-2/3 mx-auto mt-8 rounded-b-full transition-all ease-in-out duration-500"} ${
            !scream ? "h-2 bg-black" : "h-10 bg-red-600"
          }`}>
          <span
            className={`${
              !scream ? "opacity-0" : "opacity-100"
            } transition-all ease-in-out duration-500 text-sm`}>
            I Love You
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
