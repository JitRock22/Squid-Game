
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import audioRef from '../assets/SquidGameSong.mp3'; // Adjust the path as necessary

const Home = () => {
    const imageUrl = 'https://res.cloudinary.com/doyahf4an/image/upload/v1751126047/SquidGame_nlwg04.jpg';

    const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};


    return (
        <motion.div
            style={backgroundStyle}
            className="flex flex-col items-center justify-center text-center px-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >

            <h1
                className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                style={{ fontFamily: 'SquidGame' }}
            >
                Welcome to S<span className=" text-secondary ">q</span>uid G<span className=" text-secondary">a</span>m<span className=" text-secondary">E</span>
                <p className="text-xl mid:text-2xl lg:text-3xl" style={{ fontFamily: 'Poppins' }}>
                    Answer a few twisted questions and uncover your fate in the Squid Game universe
                </p>
            </h1>


            <audio autoPlay loop>
                <source src={audioRef} type="audio/mpeg" />
                Your browser does not support the audio element.

            </audio>
            <Link to="/quiz" className="mb-8">

                <motion.button
                    // className="bg-secondary text-white text-lg md:text-xl px-6 py-3 rounded-xl hover:bg-new shadow-lg"
                    className="bg-pink-500 hover:bg-pink-700 text-white text-xl font-bold py-3 px-8 rounded-xl shadow-[0_6px_0_#a0153e] active:shadow-[0_2px_0_#a0153e] active:translate-y-1 transition-all duration-150"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,0,0,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ fontFamily: 'SquidGame' }}
                >
                    St<span className="text-accent">a</span>rt G<span className="text-accent">a</span>m<span className="text-accent">e</span>
                </motion.button>
            </Link>

        </motion.div>
    );
};

export default Home;
