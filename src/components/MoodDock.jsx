import React from 'react'
import MoodButton from './MoodButton'

function MoodDock({
  moods,
  currentMood,
  handleMoodChange
}) {
  return (
    <nav className="mood-dock">
      <div className="dock-inner">

        {moods.map((mood) => (
          <MoodButton
            key={mood.id}
            mood={mood}
            currentMood={currentMood}
            handleMoodChange={handleMoodChange}
          />
        ))}

      </div>
    </nav>
  )
}

export default MoodDock