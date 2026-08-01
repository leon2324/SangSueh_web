import React, { useState } from 'react';
import { Award, UserCheck, CheckCircle, Info } from 'lucide-react';

export default function PageRadarEvaluation({ competencies, teacherComments }) {
  const [activeCompIndex, setActiveCompIndex] = useState(0);
  const activeComp = competencies[activeCompIndex];

  // SVG Radar Chart calculation helpers
  const size = 300;
  const center = size / 2;
  const radius = 100;
  const numAxes = competencies.length;

  const getCoordinates = (index, valuePercent = 1) => {
    const angle = (Math.PI * 2 / numAxes) * index - Math.PI / 2;
    const r = radius * valuePercent;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate radar polygon points
  const points = competencies.map((comp, idx) => {
    const { x, y } = getCoordinates(idx, comp.score / 100);
    return `${x},${y}`;
  }).join(' ');

  // Background radar grid webs (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div style={{ display: 'flex', gap: '30px', width: '100%' }}>
      {/* Left Page: 5-Competency SVG Radar Chart */}
      <div 
        style={{ 
          flex: 1, 
          background: '#FFF', 
          borderRadius: '16px', 
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}
      >
        <div>
          <span className="badge-tag">P.14 素養雷達圖</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginTop: '8px' }}>
            孩子暑期五大能力成長評估
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '4px' }}>
            點擊雷達圖各角點，可檢視該項能力在 7 月課程中的具體表現。
          </p>

          {/* SVG Radar Chart Rendering */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0', position: 'relative' }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              {/* Web Grids */}
              {gridLevels.map((lvl, idx) => {
                const gridPoints = competencies.map((_, i) => {
                  const { x, y } = getCoordinates(i, lvl);
                  return `${x},${y}`;
                }).join(' ');
                return (
                  <polygon
                    key={idx}
                    points={gridPoints}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="1"
                    strokeDasharray={lvl === 1 ? 'none' : '3,3'}
                  />
                );
              })}

              {/* Axis lines */}
              {competencies.map((_, idx) => {
                const { x, y } = getCoordinates(idx, 1);
                return (
                  <line
                    key={idx}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke="#CBD5E1"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Data Area Polygon */}
              <polygon
                points={points}
                fill="rgba(6, 182, 212, 0.25)"
                stroke="#06B6D4"
                strokeWidth="3"
              />

              {/* Interactive Data Vertices */}
              {competencies.map((comp, idx) => {
                const { x, y } = getCoordinates(idx, comp.score / 100);
                const isSelected = activeCompIndex === idx;
                return (
                  <g key={idx} onClick={() => setActiveCompIndex(idx)} style={{ cursor: 'pointer' }}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isSelected ? 8 : 5}
                      fill={isSelected ? '#F59E0B' : '#0891B2'}
                      stroke="#FFF"
                      strokeWidth="2"
                    />
                  </g>
                );
              })}

              {/* Axis Labels */}
              {competencies.map((comp, idx) => {
                const { x, y } = getCoordinates(idx, 1.25);
                const isSelected = activeCompIndex === idx;
                return (
                  <text
                    key={idx}
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="12"
                    fontWeight={isSelected ? "800" : "600"}
                    fill={isSelected ? "#D97706" : "#475569"}
                  >
                    {comp.label}
                  </text>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Selected Competency Detail Card */}
        <div style={{ background: '#ECFEFF', border: '1px solid #A5F3FC', padding: '16px', borderRadius: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 800, color: '#0891B2', fontSize: '0.95rem' }}>
              🎯 {activeComp.label}
            </span>
            <span style={{ fontWeight: 900, color: '#F59E0B', fontSize: '1.1rem' }}>
              {activeComp.score} 分
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#164E63', marginTop: '6px', lineHeight: 1.5 }}>
            {activeComp.desc}
          </p>
        </div>
      </div>

      {/* Right Page: Teachers' Personal Comments */}
      <div 
        style={{ 
          flex: 1, 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
          borderRadius: '16px', 
          padding: '32px',
          color: '#FFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div>
          <span className="badge-tag" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B' }}>
            P.15 導師評語與寄語
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginTop: '8px' }}>
            帶隊導師的專屬真心話
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '4px' }}>
            每一個孩子的細微進步，老師們都看在眼裡、記在心裡。
          </p>

          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {teacherComments.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '20px',
                  borderRadius: '12px',
                  position: 'relative'
                }}
              >
                <div style={{ fontWeight: 700, color: '#F59E0B', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <UserCheck size={18} />
                  <span>{item.teacher}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                  「{item.comment}」
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '0.8rem', color: '#64748B', textAlign: 'center' }}>
          尚學文教 7 月教學團隊 謹製
        </div>
      </div>
    </div>
  );
}
