import React, { useState } from 'react';
import { Play, Pause, Music, Quote, Volume2 } from 'lucide-react';

export default function PageDirectorMessage({ messageData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSubtitleIndex, setActiveSubtitleIndex] = useState(0);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Simulate karaoke subtitle progression
    if (!isPlaying) {
      const interval = setInterval(() => {
        setActiveSubtitleIndex(prev => (prev + 1) % messageData.transcript.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '30px', width: '100%' }}>
      {/* Left Page (Photo & Slogan) */}
      <div 
        style={{ 
          flex: 1, 
          background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)', 
          borderRadius: '16px',
          padding: '32px',
          color: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '620px'
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge-tag" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B' }}>
            P.02 【發刊詞】
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginTop: '16px', fontWeight: 800, color: '#FFF' }}>
            尚學教育初衷
          </h2>
          <p style={{ color: '#06B6D4', fontWeight: 700, marginTop: '8px' }}>
            {messageData.subtitle}
          </p>
        </div>

        {/* Feature Image Poster */}
        <div 
          style={{ 
            position: 'relative', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            margin: '20px 0',
            boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <img 
            src="/images/science/img_1.jpg" 
            alt="營隊學習寫真" 
            style={{ width: '100%', height: '260px', objectFit: 'cover' }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px',
              background: 'linear-gradient(0deg, rgba(15,23,42,0.9) 0%, transparent 100%)',
              color: '#F8FAFC',
              fontSize: '0.85rem'
            }}
          >
            📍 7 月科學探究科展討論課堂紀錄
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <Quote size={28} color="#F59E0B" />
          <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#CBD5E1', marginTop: '8px' }}>
            「真正的教育，是在孩子離開課堂後，依然保有發現問題與熱愛思考的能力。」
          </p>
          <div style={{ marginTop: '12px', fontSize: '0.85rem', fontWeight: 700, color: '#F59E0B' }}>
            —— 尚學文教 創辦人 / 營長
          </div>
        </div>
      </div>

      {/* Right Page (Text Content & Black Vinyl Audio Player) */}
      <div 
        style={{ 
          flex: 1, 
          background: '#FFF', 
          borderRadius: '16px',
          padding: '36px',
          color: '#1E293B',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}
      >
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B', letterSpacing: '1px' }}>
            P.03 DIRECTOR'S LETTER
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginTop: '8px', color: '#0F172A' }}>
            {messageData.title}
          </h2>

          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px', lineHeight: 1.7, fontSize: '0.95rem', color: '#334155' }}>
            {messageData.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Black Vinyl Record Player */}
        <div className="vinyl-container">
          <div className={`vinyl-disc ${isPlaying ? 'spinning' : ''}`}>
            <div className="vinyl-center" />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Music size={16} />
                <span>營長親口原音致詞</span>
              </div>
              
              {/* Soundwave animation indicator */}
              <div className={`soundwave ${isPlaying ? 'playing' : ''}`}>
                <div className="soundwave-bar" />
                <div className="soundwave-bar" />
                <div className="soundwave-bar" />
                <div className="soundwave-bar" />
                <div className="soundwave-bar" />
              </div>
            </div>

            {/* Subtitle Karaoke Display */}
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', minHeight: '36px', background: 'rgba(255,255,255,0.05)', padding: '6px 10px', borderRadius: '6px' }}>
              💬 {messageData.transcript[activeSubtitleIndex]}
            </div>

            <button
              onClick={toggleAudio}
              style={{
                marginTop: '10px',
                background: isPlaying ? '#EF4444' : '#06B6D4',
                color: '#FFF',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? '暫停廣播' : '點擊收聽致詞'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
