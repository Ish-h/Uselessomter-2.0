import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTrashContext } from "./context/TrashContext"; // ✅ ADDED THIS
import './ResultPage.css';
import jsPDF from "jspdf";
import { generateCertificate } from '../utils/generateCertificate';


const ResultPage = () => {
  const navigate = useNavigate();
  const { resultData } = useTrashContext();

if (!resultData || resultData.totalScore === undefined) {
  return (
    <div className="result-container">
      <h1 className="result-title">Oops!</h1>
      <p>Please go back and analyze your project first.</p>
      <button className="certificate-btn" onClick={() => navigate('/')}>
        🔙 Back to Analyzer
      </button>
    </div>
  );
}

const uselessnessScore = resultData.totalScore;

  const handleCertificate = () => {
  alert('🎖 Generating your certificate of ultimate uselessness...');

  setTimeout(() => {
    const { projectName, teamName, totalScore, commentary } = resultData;
    generateCertificate({
      teamName,
      projectName,
      score: totalScore,
      commentary,
    });
  }, 100); 
};


<div id="certificate-content" style={{ display: 'none' }}>
  <div style={{
    width: '800px',
    padding: '50px',
    backgroundColor: '#fff8e7',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    border: '8px double #333',
    position: 'relative'
  }}>
    <h1 style={{ fontSize: '32px' }}>🎓 Certificate of Uselessness</h1>
    <p style={{ fontSize: '20px' }}>🏆 Awarded to team <strong>{resultData.teamName}</strong></p>
    <p style={{ fontSize: '20px' }}>📂 Project: <strong>{resultData.projectName}</strong></p>
    <p style={{ fontSize: '20px' }}>🚮 Uselessness Score: <strong>{resultData.totalScore}%</strong></p>
    <p style={{ fontSize: '18px' }}>💬 {resultData.commentary}</p>
    <div style={{ marginTop: '40px', textAlign: 'right' }}>
      <p>🖋️ Dr. Trashit Roy</p>
      <p style={{ margin: 0 }}>Lead Juror</p>
      <p style={{ margin: 0 }}>Trashalyzer 9000</p>
    </div>
    <div style={{ position: 'absolute', bottom: '40px', left: '40px', fontSize: '40px' }}>🥇</div>
  </div>
</div>

    return (
    <div className="result-container">
      <h1 className="result-title">Your Project is...</h1>

      <div className="uselessness-box">
        <p className="score-label">Uselessness Score:</p>
        <h2 className="score-value">{uselessnessScore}% 🚮</h2>
        <p className="score-commentary">
          {uselessnessScore > 80
            ? "This is next-level trash. We’re impressed. 🗑️💯"
            : "Hmm... Still useless, but you could try harder. 😬"}
        </p>

        <button className="certificate-btn" onClick={handleCertificate}>
          🎖 Generate Certificate
        </button>
      </div>

      {/* Therapist Bot */}
      <div className="therapist-bot">
        <div className="bot-bubble">
          <p>
            “Hey there, it’s okay to feel down. Many ideas are useless, but yours is special 😌💬”
          </p>
        </div>
        <img
          src="/therapist.jpg"
          alt="Therapist Bot"
          className="bot-img"
        />
      </div>

      {/* Hidden Certificate Content (now inside JSX) */}
      <div id="certificate-content" style={{ display: 'none' }}>
        <div style={{
          width: '800px',
          padding: '50px',
          backgroundColor: '#fff8e7',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          border: '8px double #333',
          position: 'relative'
        }}>
          <h1 style={{ fontSize: '32px' }}>🎓 Certificate of Uselessness</h1>
          <p style={{ fontSize: '20px' }}>🏆 Awarded to team <strong id="cert-team">{resultData.teamName}</strong></p>
          <p style={{ fontSize: '20px' }}>📂 Project: <strong id="cert-project">{resultData.projectName}</strong></p>
          <p style={{ fontSize: '20px' }}>🚮 Uselessness Score: <strong id="cert-score">{resultData.totalScore}%</strong></p>
          <p style={{ fontSize: '18px' }}>💬 <span id="cert-comment">{resultData.commentary}</span></p>
          <div style={{ marginTop: '40px', textAlign: 'right' }}>
            <p>🖋️ Dr. Trashit Roy</p>
            <p style={{ margin: 0 }}>Lead Juror</p>
            <p style={{ margin: 0 }}>Trashalyzer 9000</p>
          </div>
          <div style={{ position: 'absolute', bottom: '40px', left: '40px', fontSize: '40px' }}>🥇</div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
