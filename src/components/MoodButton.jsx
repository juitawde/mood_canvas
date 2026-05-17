import React from 'react'

function MoodButton({
  mood,
  currentMood,
  handleMoodChange
}) {
  return (
    <button
      className={`dock-item ${
        currentMood.id === mood.id ? 'active' : ''
      }`}
      onClick={() => handleMoodChange(mood)}
      style={{ color: currentMood.textColor }}
    >
      <span className="dock-emoji">
        {mood.emoji}
      </span>

      <span className="dock-label">
        {mood.label}
      </span>
    </button>
  )
}

export default MoodButton