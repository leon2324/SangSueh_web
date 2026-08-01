import React, { useState } from 'react';
import { Star, Award, ChevronRight, Layers } from 'lucide-react';

export default function PageStudentShowcase({ showcaseList }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentItem = showcaseList[activeTab];

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Banner */}
      <div 
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
          padding: '24px 32px', 
          borderRadius: '16px',
          color: '#FFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <span className="badge-tag" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B' }}>
            P.10 - P.13 【小小頂尖家】
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, marginTop: '8px' }}>
            學生個人學習成果與創作展
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '4px' }}>
            從一開始的草稿發想，到最終產出的精裝創作，見證孩子的蛻變與突破。
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {showcaseList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              style={{
                background: activeTab === idx ? '#F59E0B' : 'rgba(255,255,255,0.1)',
                color: activeTab === idx ? '#0F172A' : '#FFF',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              作品 {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Showcase */}
      <div style={{ display: 'flex', gap: '30px' }}>
        {/* Left Side: Before / Initial Draft */}
        <div 
          style={{ 
            flex: 1, 
            background: '#FFF', 
            borderRadius: '16px', 
            padding: '24px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ background: '#E2E8F0', color: '#475569', fontWeight: 700, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '4px' }}>
              STEP 1: {currentItem.beforeLabel}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>{currentItem.student}</span>
          </div>

          <div style={{ width: '100%', height: '280px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <img 
              src={currentItem.beforeImg} 
              alt={currentItem.beforeLabel} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5 }}>
            草稿階段重點在於提出大膽假設與多角度嘗試，孩子們不害怕犯錯，盡情發揮創意。
          </p>
        </div>

        {/* Arrow Transition Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div 
            style={{ 
              width: '48px', 
              height: '48px', 
              borderRadius: '50%', 
              background: '#06B6D4', 
              color: '#FFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(6, 182, 212, 0.4)'
            }}
          >
            <ChevronRight size={28} />
          </div>
        </div>

        {/* Right Side: After / Finished Work & Highlight Card */}
        <div 
          style={{ 
            flex: 1, 
            background: '#FFF', 
            borderRadius: '16px', 
            padding: '24px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '2px solid #F59E0B'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ background: '#FEF3C7', color: '#D97706', fontWeight: 800, fontSize: '0.8rem', padding: '4px 10px', borderRadius: '4px' }}>
              STEP 2: {currentItem.afterLabel}
            </span>
            <span className="skill-tag">
              <Star size={14} /> 亮點作品
            </span>
          </div>

          <div style={{ width: '100%', height: '280px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <img 
              src={currentItem.afterImg} 
              alt={currentItem.afterLabel} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ background: '#FFFBEB', padding: '12px 16px', borderRadius: '8px', borderLeft: '4px solid #F59E0B' }}>
            <div style={{ fontWeight: 700, color: '#B45309', fontSize: '0.85rem' }}>🌟 成果點評與亮點：</div>
            <p style={{ fontSize: '0.88rem', color: '#78350F', marginTop: '4px', lineHeight: 1.5 }}>
              {currentItem.highlight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
