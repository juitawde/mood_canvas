import React from 'react'

function MoodDisplay({ currentMood, isAnimating }) {
  return (
    <main className="main-content">
      <div className="display-wrapper">

       <div className="mood-portal">
          <span
            className={`central-emoji ${
              isAnimating ? 'spin-pop' : ''
            }`}
          >
            {currentMood.emoji}
          </span>
        </div>

        <div className="mood-description">
          <h2 className="mood-label">
            {currentMood.label}
          </h2>

          <p className="mood-quote">
            {currentMood.quote}
          </p>
        </div>

      </div>
    </main>
  )
}

export default MoodDisplay