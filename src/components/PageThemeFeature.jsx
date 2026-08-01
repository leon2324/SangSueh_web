import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function PageThemeFeature({ theme, pageNum, onOpenLightbox }) {
  const [selectedImg, setSelectedImg] = useState(theme.image);

  return (
    <div style={{ display: 'flex', gap: '30px', width: '100%' }}>
      {/* Left Page: Story Editorial & Skill Badges */}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="badge-tag">{theme.category}</span>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8' }}>P.0{pageNum}</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '12px' }}>
            {theme.title}
          </h2>

          <p style={{ marginTop: '12px', fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>
            {theme.description}
          </p>

          <div 
            style={{ 
              marginTop: '20px', 
              background: '#F8FAFC', 
              borderLeft: '4px solid #F59E0B', 
              padding: '16px', 
              borderRadius: '0 8px 8px 0' 
            }}
          >
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#D97706', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} />
              <span>課程現場觀察紀錄</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
              {theme.story}
            </p>
          </div>
        </div>

        {/* Unlocked Skill Badges */}
        <div style={{ marginTop: '24px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#06B6D4', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={16} />
            <span>本單元解鎖關鍵素養 (Skill Tree Unlocked)</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {theme.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">
                <CheckCircle2 size={14} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Page: High Res Photo Spotlight & Gallery Thumbnails */}
      <div 
        style={{ 
          flex: 1, 
          background: '#0F172A', 
          borderRadius: '16px',
          padding: '24px',
          color: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '0.85rem', color: '#06B6D4', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ImageIcon size={16} />
              <span>特寫照片紀錄 Spotlight</span>
            </div>
            <button 
              onClick={() => onOpenLightbox(selectedImg)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#FFF',
                border: 'none',
                padding: '4px 10px',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              放大看高畫質 🔍
            </button>
          </div>

          {/* Main Featured Photo */}
          <div 
            style={{ 
              width: '100%', 
              height: '320px', 
              borderRadius: '12px', 
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
              position: 'relative'
            }}
          >
            <img 
              src={selectedImg} 
              alt={theme.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Thumbnail Selector Row */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '8px' }}>點擊切換查看活動照片：</div>
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
            {theme.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`縮圖 ${idx}`}
                onClick={() => setSelectedImg(img)}
                style={{
                  width: '70px',
                  height: '55px',
                  borderRadius: '6px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  border: selectedImg === img ? '2px solid #F59E0B' : '2px solid transparent',
                  opacity: selectedImg === img ? 1 : 0.6,
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
