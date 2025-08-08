import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTrashContext } from "./context/TrashContext";
import { analyzeTrash } from '../utils/analyzeTrash';
import './TrashAnalyzer.css';

const TrashAnalyzer = () => {
  const navigate = useNavigate();
  const { setResultData } = useTrashContext();

  const [launch, setLaunch] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  const [projectName, setProjectName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');

  // Sparkles 🎆
  useEffect(() => {
    const interval = setInterval(() => {
      const emojiList = ['😒', '😶‍🌫️', '🥸', '🫠', '😎'];
      const newSparkle = {
        id: Date.now(),
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 2 + 2}s`,
      };
      setSparkles(prev => [...prev.slice(-20), newSparkle]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // 🔧 Fixed handleAnalyze function
  const handleAnalyze = () => {
    const result = analyzeTrash(projectName, teamName, description); // ✅ fixed: pass 3 args
    console.log("Result generated: ", result);
    setResultData(result);
    console.log("Navigating to /result...");
    navigate('/result');
  };

  return (
    <div className="analyzer-container">
      <h1 className="analyzer-title">Uselessometer 2.0</h1>

      <div className={`analyzer-box ${launch ? 'rocket' : ''}`}>
        <label className="analyzer-label">Project Name</label>
        <input
          type="text"
          className="analyzer-input"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <label className="analyzer-label">Team Name</label>
        <input
          type="text"
          className="analyzer-input"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <label className="analyzer-label">Project Description</label>
        <textarea
          className="analyzer-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={handleAnalyze} className="analyze-btn">
          🚀 Does your idea belong to the trash?
        </button>
      </div>

      <div className="sparkle-layer">
        {sparkles.map(sparkle => (
          <span
            key={sparkle.id}
            className="sparkle-emoji"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              animationDuration: sparkle.animationDuration,
            }}
          >
            {sparkle.emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrashAnalyzer;
