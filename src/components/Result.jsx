// ResultPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';


export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const character = location.state?.character;

  if (!character) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <p className="text-xl mb-4">No result found. Please take the quiz first.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-xl shadow-lg active:translate-y-1 transition-all duration-150"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center overflow-hidden justify-center min-h-screen bg-black text-white p-6">


        {/* Audio background */}
        <audio autoPlay loop>
          <source src="https://res.cloudinary.com/doyahf4an/video/upload/v1751126684/Way_back_lmp25n.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.

        </audio>


        <h1 className="text-3xl font-bold mb-4">You Are...</h1>
        <h2 style={{ fontFamily: 'SquidGame' }} className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-pink-500 mb-2">{character.name}</h2>
        {character.number !== "N/A" && (
          <p style={{ fontFamily: 'Poppins' }} className="text-lg mb-4">Player #{character.number}</p>
        )}
        <img
          src={character.image}
          alt={character.name}
          className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-6"
        />
        <p style={{ fontFamily: 'Poppins' }} className="max-w-xl text-center text-lg mb-8">{character.description}</p>

        <div className="flex gap-4">
          <button
            style={{ fontFamily: 'Poppins' }}
            onClick={() => navigate("/")}
            className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-5 rounded-xl transition-all duration-150"
          >
            Retake Quiz
          </button>

          <button
            style={{ fontFamily: 'Poppins' }}
            onClick={() => navigator.share?.({
              title: `I'm ${character.name} from Squid Game!`,
              text: character.description,
              url: window.location.href,
            }) || alert('Sharing not supported on this browser.')}
            // className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-5 rounded-xl transition-all duration-150"
            className="bg-gradient-to-r from-pink-700 to-pink-500 hover:from-pink-600 hover:to-pink-400 text-white py-3 px-6 rounded-xl shadow-[0_6px_0_#a0153e] active:shadow-[0_2px_0_#a0153e] active:translate-y-1 transition-all duration-150"
          >
            Share Result
          </button>
        </div>
      </div>
    </motion.div>
  );
}
