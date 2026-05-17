import React, { useState, useEffect } from 'react'
import './index.css'

import Header from './components/Header'
import MoodDisplay from './components/MoodDisplay'
import MoodDock from './components/MoodDock'

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
    }, 700)
  }

  useEffect(() => {
    document.body.className = currentMood.class
  }, [currentMood])

  return (
    <div
      className="app-container"
      style={{ color: currentMood.textColor }}
    >
      <Header />

      <MoodDisplay
        currentMood={currentMood}
        isAnimating={isAnimating}
      />

      <MoodDock
        moods={MOODS}
        currentMood={currentMood}
        handleMoodChange={handleMoodChange}
      />

      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

    </div>
  )
}

export default App