import React, { useMemo } from 'react';
import '../styles/MovingStarsStyle.css';

const MovingStars = () => {
  // Generate bintang-bintang dengan posisi dan durasi random
  const stars = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1, // 1-3px
      duration: Math.random() * 8 + 5, // 5-13 detik
      delay: Math.random() * 2, // 0-2 detik
      opacity: Math.random() * 0.7 + 0.3, // 0.3-1
      isLarge: Math.random() > 0.7, // 30% bintang besar
    }));
  }, []);

  return (
    <div className="stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className={`star ${star.isLarge ? 'star-large' : ''}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `
              twinkle ${star.duration}s ease-in-out ${star.delay}s infinite,
              float ${star.duration * 1.5}s ease-in-out ${star.delay}s infinite
            `,
          }}
        />
      ))}
    </div>
  );
};

export default MovingStars;