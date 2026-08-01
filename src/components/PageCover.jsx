import React from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export default function PageCover({ magazineData, onStartRead }) {
  return (
    <div 
      style={{
        minHeight: '680px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
        borderRadius: '24px',
        padding: '48px',
        color: '#FFF',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      {/* Background Decorative Gradient Orbs */}
      <div 
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Top Banner Tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
        <div className="glass-pill" style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.85rem' }}>
          <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
          2026.07 特別發行號 VOL.07
        </div>
        <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
          尚學文教 頂尖教育系列
        </div>
      </div>

      {/* Hero Content */}
      <div style={{ margin: '40px 0', zIndex: 2 }}>
        <h3 style={{ color: '#06B6D4', letterSpacing: '2px', fontWeight: 700, marginBottom: '12px', fontSize: '1.1rem' }}>
          {magazineData.magazineTitle}
        </h3>
        <h1 
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '3.2rem', 
            fontWeight: 900, 
            lineHeight: 1.15,
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {magazineData.issueTitle}
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
          探索孩子在科學探究、食農耕作、寫作畫本與戶外踏查中的點滴成長。這是一本專屬於您與孩子的精裝暑期紀錄誌。
        </p>

        {/* Personalization Card */}
        <div 
          style={{
            marginTop: '32px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255,255,255,0.06)',
            padding: '12px 20px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.15)'
          }}
        >
          <div 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: '#F59E0B', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: 800,
              color: '#0F172A' 
            }}
          >
            家
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>專屬典藏頁面</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF' }}>
              Dear {magazineData.studentName} 家長專屬閱覽
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Start Action */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
        <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
          尚學文教出版 © 2026 SUNSHINE CMS.EDU
        </div>

        <button
          onClick={onStartRead}
          style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            color: '#0F172A',
            border: 'none',
            padding: '14px 28px',
            borderRadius: '9999px',
            fontWeight: 800,
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 10px 20px rgba(245, 158, 11, 0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          <span>翻開閱讀雜誌</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
