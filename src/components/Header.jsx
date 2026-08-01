import React, { useState } from 'react';
import { BookOpen, Layers, Volume2, VolumeX, Maximize, List, Download } from 'lucide-react';

export default function Header({ 
  viewMode, 
  setViewMode, 
  soundEnabled, 
  setSoundEnabled, 
  currentPage, 
  totalPages,
  onNavigatePage,
  onOpenPdfModal
}) {
  const [showToc, setShowToc] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const tocItems = [
    { page: 1, label: "P.01 雜誌封面" },
    { page: 2, label: "P.02-P.03 【發刊詞】營長寄語與教育理念" },
    { page: 4, label: "P.04-P.05 【主題一】冰品保冰商業化科展" },
    { page: 6, label: "P.06-P.07 【主題二】旗山農耕與小小市集" },
    { page: 8, label: "P.08-P.09 【主題三四】八格畫本與戶外踏查" },
    { page: 10, label: "P.10-P.13 【小小頂尖家】學生成果對比展" },
    { page: 14, label: "P.14-P.15 【成長指標】五力雷達圖與評語" },
    { page: 16, label: "P.16-P.19 【時光藝廊】動態照片花絮海" },
    { page: 20, label: "P.20 (封底) 家長祝福留言牆" }
  ];

  return (
    <header className="app-header">
      <div className="brand-logo">
        <span className="brand-badge">2026 暑期頂尖計劃</span>
        <span>尚學線上電子雜誌</span>
      </div>

      <div className="nav-actions">
        {/* TOC Button */}
        <button 
          className="btn-mode-toggle"
          onClick={() => setShowToc(!showToc)}
        >
          <List size={18} />
          <span>目錄選單</span>
        </button>

        {/* View Mode Toggle */}
        <button 
          className="btn-mode-toggle"
          onClick={() => setViewMode(viewMode === 'flipbook' ? 'slide' : 'flipbook')}
        >
          {viewMode === 'flipbook' ? <Layers size={18} /> : <BookOpen size={18} />}
          <span>{viewMode === 'flipbook' ? '切換簡報模式' : '切換 3D 雙頁模式'}</span>
        </button>

        {/* Audio Toggle */}
        <button 
          className="btn-icon" 
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? "靜音" : "開啟音樂/音訊"}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>

        {/* Fullscreen Button */}
        <button 
          className="btn-icon" 
          onClick={toggleFullscreen}
          title="全螢幕切換"
        >
          <Maximize size={20} />
        </button>
      </div>

      {/* Table of Contents Modal */}
      {showToc && (
        <div 
          style={{
            position: 'fixed',
            top: '75px',
            right: '24px',
            background: '#1E293B',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '20px',
            width: '320px',
            zIndex: 1100,
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h4 style={{ color: '#F59E0B', fontFamily: 'var(--font-heading)' }}>📖 雜誌目錄跳轉</h4>
            <button 
              onClick={() => setShowToc(false)}
              style={{ background: 'none', border: 'none', color: '#AAA', cursor: 'pointer', fontSize: '1.1rem' }}
            >
              ✕
            </button>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tocItems.map((item) => (
              <li key={item.page}>
                <button
                  onClick={() => {
                    onNavigatePage(item.page);
                    setShowToc(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: currentPage === item.page ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.05)',
                    border: currentPage === item.page ? '1px solid #06B6D4' : '1px solid transparent',
                    color: currentPage === item.page ? '#06B6D4' : '#FFF',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
