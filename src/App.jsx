import React, { useState, useEffect } from 'react'
import './index.css'

const MOODS = [
  { 
    id: 'happy', 
    emoji: '😄', 
    label: 'Happy', 
    class: 'bg-happy',
    quote: 'Radiating positivity like a summer sun!',
    textColor: '#4a3a00'
  },
  { 
    id: 'sad', 
    emoji: '😔', 
    label: 'Sad', 
    class: 'bg-sad',
    quote: 'Even the clouds need to rain sometimes.',
    textColor: '#ffffff'
  },
  { 
    id: 'tired', 
    emoji: '😴', 
    label: 'Tired', 
    class: 'bg-tired',
    quote: 'Dreaming of a thousand-year slumber...',
    textColor: '#ffffff'
  },
  { 
    id: 'excited', 
    emoji: '🤩', 
    label: 'Excited', 
    class: 'bg-excited',
    quote: 'Pure energy flowing through my veins!',
    textColor: '#ffffff'
  },
  { 
    id: 'angry', 
    emoji: '😡', 
    label: 'Angry', 
    class: 'bg-angry',
    quote: 'Warning: High pressure system incoming.',
    textColor: '#ffffff'
  },
  { 
    id: 'love', 
    emoji: '🥰', 
    label: 'Love', 
    class: 'bg-love',
    quote: 'Floating on a cloud of pure affection.',
    textColor: '#ffffff'
  },
  { 
    id: 'cool', 
    emoji: '😎', 
    label: 'Cool', 
    class: 'bg-cool',
    quote: 'Stay frosty, keep the vibe steady.',
    textColor: '#00332e'
  },
]

function App() {
  const [currentMood, setCurrentMood] = useState(MOODS[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const handleMoodChange = (mood) => {
    if (mood.id === currentMood.id) return
    
    setIsAnimating(true)
    setCurrentMood(mood)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  useEffect(() => {
    document.body.className = currentMood.class
  }, [currentMood])

  return (
    <div className="app-container" style={{ color: currentMood.textColor }}>
      <header className="header">
        <h1 className="title">Mood Canvas</h1>
        <p className="subtitle">Painting your emotions in real-time</p>
      </header>

      <main className="main-content">
        <div className="display-wrapper">
          <div className={`mood-portal ${isAnimating ? 'pulse' : ''}`}>
            <span className={`central-emoji ${isAnimating ? 'spin-pop' : ''}`}>
              {currentMood.emoji}
            </span>
          </div>
          
          <div className="mood-description">
            <h2 className="mood-label">{currentMood.label}</h2>
            <p className="mood-quote">{currentMood.quote}</p>
          </div>
        </div>
      </main>

      <nav className="mood-dock">
        <div className="dock-inner">
          {MOODS.map((mood) => (
            <button
              key={mood.id}
              className={`dock-item ${currentMood.id === mood.id ? 'active' : ''}`}
              onClick={() => handleMoodChange(mood)}
              title={mood.label}
              style={{ color: currentMood.textColor }}
            >
              <span className="dock-emoji">{mood.emoji}</span>
              <span className="dock-label">{mood.label}</span>
            </button>
          ))}
        </div>
      </nav>
      
      {/* Decorative background elements */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
    </div>
  )
}

export default App
