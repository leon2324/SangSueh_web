import React, { useState } from 'react';
import { Camera, Filter, Maximize2 } from 'lucide-react';

export default function PagePhotoGallery({ themes, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Flatten all photos with metadata
  const allPhotos = [
    ...themes[0].gallery.map((img, i) => ({ img, cat: 'science', label: `科學探究 寫真 ${i+1}` })),
    ...themes[1].gallery.map((img, i) => ({ img, cat: 'agri', label: `食農教育 寫真 ${i+1}` })),
    ...themes[2].gallery.map((img, i) => ({ img, cat: 'writing', label: `寫作畫本 寫真 ${i+1}` })),
    ...themes[3].gallery.map((img, i) => ({ img, cat: 'outdoor', label: `鴻旗農場 寫真 ${i+1}` }))
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? allPhotos 
    : allPhotos.filter(p => p.cat === activeCategory);

  const categories = [
    { id: 'all', label: '📸 全部 7 月花絮' },
    { id: 'science', label: '🔬 科學探究' },
    { id: 'agri', label: '🌱 食農耕作' },
    { id: 'writing', label: '✍️ 寫作發表' },
    { id: 'outdoor', label: '🚜 鴻旗農場' }
  ];

  return (
    <div 
      style={{ 
        width: '100%', 
        background: '#FFF', 
        borderRadius: '16px', 
        padding: '36px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <span className="badge-tag">P.16 - P.19 時光藝廊</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginTop: '8px' }}>
            7 月歡笑與汗水動態照片牆
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#64748B', marginTop: '4px' }}>
            點擊任一照片可開啟 Lightbox 全螢幕放大欣賞與保存。
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? '#06B6D4' : '#F1F5F9',
                color: activeCategory === cat.id ? '#FFF' : '#475569',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Polaroid Grid */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
          gap: '20px',
          maxHeight: '480px',
          overflowY: 'auto',
          padding: '10px'
        }}
      >
        {filteredPhotos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => onOpenLightbox(photo.img)}
            style={{
              background: '#FAF9F6',
              padding: '12px 12px 20px 12px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.05)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
            className="polaroid-card"
          >
            <div style={{ width: '100%', height: '160px', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={photo.img} 
                alt={photo.label} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#FFF',
                  padding: '4px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Maximize2 size={12} />
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '10px', textAlign: 'center', fontWeight: 600 }}>
              {photo.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
