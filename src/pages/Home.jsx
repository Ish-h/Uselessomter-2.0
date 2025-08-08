import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  const emojiList = ['🤪', '💥', '😂', '🌈', '👽', '🦄', '🔥', '🎉', '🤯', '💫', '🙃', '🌀']
  const totalEmojis = 60

  const randomEmojis = Array.from({ length: totalEmojis }, () => {
    const emoji = emojiList[Math.floor(Math.random() * emojiList.length)]
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 2
    const duration = 0.6 + Math.random() * 1.5
    const size = 2 + Math.random() * 2.5

    return {
      emoji,
      style: {
        left: `${left}%`,
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        fontSize: `${size}rem`
      }
    }
  })

  return (
    <div className="home-container">
      {randomEmojis.map((item, index) => (
        <span
          key={index}
          className="floating-emoji"
          style={item.style}
        >
          {item.emoji}
        </span>
      ))}

      <div className="center-box">
        <h1>Are you ready to sense your inner uselessness?</h1>
       <button className="fun-button" onClick={() => navigate('/analyze')}>
  I’m ready 😵
</button>

      </div>
    </div>
  )
}

export default Home
