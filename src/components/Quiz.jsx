
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import audioRef from '../assets/SquidGameSuspense.mp3';

const questions = [
  {
    question: "What motivates you the most?",
    options: [
      { text: "Money", tag: "greedy" },
      { text: "Helping others", tag: "kind" },
      { text: "Winning at all costs", tag: "ruthless" },
      { text: "Freedom", tag: "rebel" },
    ],
  },
  {
    question: "What's your strategy in games?",
    options: [
      { text: "Team up", tag: "loyal" },
      { text: "Betray when needed", tag: "ruthless" },
      { text: "Stay quiet and observe", tag: "silent" },
      { text: "Lead the group", tag: "leader" },
    ],
  },
  {
    question: "How do you handle betrayal?",
    options: [
      { text: "Forgive, but don’t forget", tag: "empathetic" },
      { text: "Cut them off forever", tag: "cold" },
      { text: "Plot revenge", tag: "ruthless" },
      { text: "Try to understand why", tag: "kind" },
    ],
  },
  {
    question: "What's your leadership style?",
    options: [
      { text: "Lead with compassion", tag: "leader" },
      { text: "Take charge no matter what", tag: "dominant" },
      { text: "Lead quietly by example", tag: "observer" },
      { text: "I don’t want to lead", tag: "silent" },
    ],
  },
  {
    question: "How do you react under pressure?",
    options: [
      { text: "Stay calm and think", tag: "strategic" },
      { text: "Follow my instincts", tag: "emotional" },
      { text: "Do whatever benefits me", tag: "manipulative" },
      { text: "Help others before myself", tag: "loyal" },
    ],
  },
  {
    question: "Pick a weapon (symbolically):",
    options: [
      { text: "My mind", tag: "intelligent" },
      { text: "My fists", tag: "aggressive" },
      { text: "My silence", tag: "mysterious" },
      { text: "My heart", tag: "trusting" },
    ],
  },
  {
    question: "Which phrase describes you best?",
    options: [
      { text: "I never give up", tag: "hardworking" },
      { text: "I always observe first", tag: "observer" },
      { text: "I protect those I love", tag: "loyal" },
      { text: "I do what's necessary", tag: "cold" },
    ],
  },
  {
    question: "Who would you save first?",
    options: [
      { text: "My family", tag: "kind" },
      { text: "Myself", tag: "greedy" },
      { text: "My teammates", tag: "loyal" },
      { text: "Whoever helps me win", tag: "strategic" },
    ],
  },
  {
    question: "Your role in a group project?",
    options: [
      { text: "The leader", tag: "leader" },
      { text: "The silent worker", tag: "hardworking" },
      { text: "The planner", tag: "strategic" },
      { text: "The chaotic one", tag: "unpredictable" },
    ],
  },
  {
    question: "What’s your biggest weakness?",
    options: [
      { text: "I trust too easily", tag: "trusting" },
      { text: "I act without thinking", tag: "emotional" },
      { text: "I push people away", tag: "cold" },
      { text: "I put others before me", tag: "empathetic" },
    ],
  },
  {
    question: "If someone disrespects you...",
    options: [
      { text: "Let it go", tag: "kind" },
      { text: "Confront them", tag: "dominant" },
      { text: "Plot quietly", tag: "manipulative" },
      { text: "Cry internally", tag: "emotional" },
    ],
  },
  {
    question: "What kind of game would you win?",
    options: [
      { text: "One that needs strategy", tag: "strategic" },
      { text: "One that tests kindness", tag: "kind" },
      { text: "One that rewards strength", tag: "aggressive" },
      { text: "One where I can deceive", tag: "manipulative" },
    ],
  },
  // Add more questions here
];
const characters = [
  {
    name: "Seong Gi-hun",
    number: "456",
    tags: ["kind", "loyal", "leader", "emotional"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125502/gihun_dudmfz.png",
    description: "A kind-hearted yet troubled man who values friendship and fairness, even in deadly games."
  },
  {
    name: "Cho Sang-woo",
    number: "218",
    tags: ["intelligent", "strategic", "ruthless", "ambitious", "cold"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125502/sangwoo_inykyz.webp",
    description: "A brilliant mind who is willing to do whatever it takes to win, no matter the moral cost."
  },
  {
    name: "Kang Sae-byeok",
    number: "067",
    tags: ["silent", "rebel", "loyal", "independent", "mysterious"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125502/saebyeok_whblav.jpg",
    description: "A quiet and independent soul who fights for her family and freedom."
  },
  {
    name: "Oh Il-nam",
    number: "001",
    tags: ["manipulative", "leader", "observer", "deceptive", "wise"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125501/ilnam_td81lt.webp",
    description: "An elderly man who hides a dark secret behind a seemingly innocent smile."
  },
  {
    name: "Jang Deok-su",
    number: "101",
    tags: ["aggressive", "ruthless", "greedy", "dominant", "violent"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125501/deoksu_fn9ks2.webp",
    description: "A violent gangster who relies on brute strength and fear to dominate others."
  },
  {
    name: "Han Mi-nyeo",
    number: "212",
    tags: ["unpredictable", "emotional", "manipulative", "attention-seeking"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125502/minyeo_toxex0.png",
    description: "A chaotic and emotional player who uses manipulation to survive."
  },
  {
    name: "Ali Abdul",
    number: "199",
    tags: ["kind", "loyal", "trusting", "innocent", "hardworking"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125501/ali_jy5ilk.jpg",
    description: "A pure-hearted and hardworking man who trusts deeply, even in darkness."
  },
  {
    name: "Hwang Jun-ho",
    number: "N/A",
    tags: ["brave", "curious", "investigative", "loyal", "justice-seeker"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125928/junho_frymu0.webp",
    description: "A brave detective who infiltrates the game to uncover the truth."
  },
  {
    name: "The Front Man",
    number: "N/A",
    tags: ["mysterious", "authoritative", "cold", "calculating", "leader"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125935/frontman_nznejh.webp",
    description: "A commanding and cold figure who controls the deadly games from the shadows."
  },
  {
    name: "The Doll",
    number: "N/A",
    tags: ["creepy", "robotic", "innocent", "deadly", "controlled"],
    image: "https://res.cloudinary.com/doyahf4an/image/upload/v1751125924/doll_eeavbo.jpg",
    description: "An iconic and eerie presence in the Red Light, Green Light game, silently enforcing rules."
  },
];


export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (tag) => {
    const updatedAnswers = [...answers, tag];
    setAnswers(updatedAnswers);
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      const result = calculateResult(updatedAnswers);
      navigate('/result', { state: { character: result } });
    }
  };

  const calculateResult = (userTags) => {
    const scoreMap = {};
    userTags.forEach(tag => {
      scoreMap[tag] = (scoreMap[tag] || 0) + 1;
    });

    let bestMatch = null;
    let bestScore = -1;
    characters.forEach(character => {
      const matchingTags = character.tags.filter(tag => scoreMap[tag]);
      const score = matchingTags.reduce((sum, tag) => sum + scoreMap[tag], 0);
      const normalized = score / character.tags.length;
      const randomness = Math.random() * 0.3;
      const finalScore = normalized + randomness;

      if (finalScore > bestScore) {
        bestScore = finalScore;
        bestMatch = character;
      }
    });

    return bestMatch;
  };

  const q = questions[currentQuestion];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white p-4 overflow-hidden">
      {/* Background Audio */}
      <audio autoPlay={true} loop>
        <source src={audioRef} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* SVG Background Icons */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
        {/* Radial glow effect */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff007f33,_transparent_70%)]"
        />

        <>
          {/* 1. Circle - Top Left (closer to edge) */}
          <svg className="absolute top-4 left-4 w-14 h-14 text-pink-500 opacity-60 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
            <circle cx="50" cy="50" r="40" />
          </svg>

          {/* 2. Square - Top Left Diagonal Fill */}
          <svg className="absolute top-20 left-16 w-12 h-12 text-pink-500 opacity-50 animate-bounce" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9">
            <rect x="10" y="10" width="80" height="80" />
          </svg>

          {/* 3. Triangle - Top Center */}
          <svg className="absolute top-5 left-1/2 transform -translate-x-1/2 w-14 h-14 text-pink-500 opacity-40 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9">
            <polygon points="50,10 90,90 10,90" />
          </svg>

          {/* 4. Square - Center Left */}
          <svg className="absolute top-1/2 left-10 transform -translate-y-1/2 w-16 h-16 text-pink-500 opacity-60 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
            <rect x="10" y="10" width="80" height="80" />
          </svg>

          {/* 5. Circle - Mid Right */}
          <svg className="absolute top-1/3 right-10 w-16 h-16 text-pink-500 opacity-50 animate-bounce" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
            <circle cx="50" cy="50" r="40" />
          </svg>

          {/* 6. Triangle - Exact Center */}
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-pink-500 opacity-50 animate-bounce" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9">
            <polygon points="50,10 90,90 10,90" />
          </svg>

          {/* 7. Circle - Top Right */}
          <svg className="absolute top-16 right-20 w-12 h-12 text-pink-500 opacity-50 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9">
            <circle cx="50" cy="50" r="40" />
          </svg>

          {/* 8. Triangle - Mid Bottom Left */}
          <svg className="absolute bottom-1/3 left-1/4 w-16 h-16 text-pink-500 opacity-60 animate-bounce" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
            <polygon points="50,10 90,90 10,90" />
          </svg>

          {/* 9. Square - Bottom Center */}
          <svg className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 text-pink-500 opacity-50 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12">
            <rect x="10" y="10" width="80" height="80" />
          </svg>

          {/* 10. Triangle - Bottom Right Edge */}
          <svg className="absolute bottom-8 right-4 w-14 h-14 text-pink-500 opacity-60 animate-bounce" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
            <polygon points="50,10 90,90 10,90" />
          </svg>

          {/* 11. Circle - Lower Right Fill */}
          <svg className="absolute bottom-20 right-16 w-10 h-10 text-pink-500 opacity-40 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
            <circle cx="50" cy="50" r="40" />
          </svg>

          {/* 12. Square - Right-Center Offset */}
          <svg className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-16 h-16 text-pink-500 opacity-50 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
            <rect x="10" y="10" width="80" height="80" />
          </svg>

          {/* 13. Triangle - Top 1/4 Left 1/4 */}
          <svg className="absolute top-1/4 left-1/4 w-12 h-12 text-pink-500 opacity-40 animate-bounce" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9">
            <polygon points="50,10 90,90 10,90" />
          </svg>

          {/* 14. Circle - Bottom Left Edge */}
          <svg className="absolute bottom-6 left-6 w-14 h-14 text-pink-500 opacity-60 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10">
            <circle cx="50" cy="50" r="40" />
          </svg>

          {/* 15. Square - Top Right Corner */}
          <svg className="absolute top-2 right-2 w-12 h-12 text-pink-500 opacity-50 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="9">
            <rect x="10" y="10" width="80" height="80" />
          </svg>
        </>

      </div>

      {/* Question Section */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-6 text-pink-500">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p className="mb-4 text-xl text-white">{q.question}</p>
        <div className="grid gap-4 w-full max-w-md">
          {q.options.map((option, idx) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={idx}
              onClick={() => handleAnswer(option.tag)}
              className="bg-gradient-to-r from-pink-700 to-pink-500 hover:from-pink-600 hover:to-pink-400 text-white py-3 px-6 rounded-xl shadow-[0_6px_0_#a0153e] active:shadow-[0_2px_0_#a0153e] active:translate-y-1 transition-all duration-150"
            >
              {option.text}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
