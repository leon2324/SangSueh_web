import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Heart, Smile, Sparkles } from 'lucide-react';

export default function PageParentGuestbook({ initialGuestbook }) {
  const [posts, setPosts] = useState(initialGuestbook);
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('🌟 超級棒！');

  const stickers = [
    "🌟 超級棒！",
    "🔬 小小科學家",
    "🌱 努力堅持獎",
    "✍️ 創意無敵",
    "🏆 頂尖隊長"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newPost = {
      id: Date.now(),
      author: author.trim() || "關心孩子的家長",
      message: message.trim(),
      sticker: selectedSticker,
      date: new Date().toISOString().split('T')[0]
    };

    setPosts([newPost, ...posts]);
    setMessage('');
    setAuthor('');

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div 
      style={{ 
        width: '100%', 
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
        borderRadius: '16px', 
        padding: '36px',
        color: '#FFF',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <span className="badge-tag" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B' }}>
            P.20 (封底) 【溫馨互動】
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, marginTop: '8px' }}>
            家長祝福留言牆與線上貼圖
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '4px' }}>
            看完孩子的 7 月暑期成果誌，留下您最溫馨的寄語與鼓勵貼圖吧！
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F59E0B', fontWeight: 700 }}>
          <Heart size={20} fill="#F59E0B" />
          <span>共 {posts.length} 則祝福</span>
        </div>
      </div>

      {/* Input Form */}
      <form 
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.15)',
          padding: '20px',
          borderRadius: '16px',
          marginBottom: '32px'
        }}
      >
        <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="您的稱呼（例如：張媽媽、陳爸爸）"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{
              flex: 1,
              minWidth: '200px',
              background: 'rgba(15,23,42,0.8)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFF',
              padding: '10px 16px',
              borderRadius: '8px',
              fontSize: '0.9rem'
            }}
          />

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>選擇貼圖：</span>
            {stickers.map((stk) => (
              <button
                key={stk}
                type="button"
                onClick={() => setSelectedSticker(stk)}
                style={{
                  background: selectedSticker === stk ? '#F59E0B' : 'rgba(255,255,255,0.1)',
                  color: selectedSticker === stk ? '#0F172A' : '#FFF',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {stk}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <textarea
            placeholder="寫下您給孩子的鼓勵與讚賞（例如：孩子你太棒了，繼續保持好奇心！）..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            style={{
              flex: 1,
              background: 'rgba(15,23,42,0.8)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#FFF',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              resize: 'none'
            }}
          />

          <button
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
              color: '#FFF',
              border: 'none',
              padding: '0 24px',
              borderRadius: '8px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)'
            }}
          >
            <span>發送祝福</span>
            <Send size={18} />
          </button>
        </div>
      </form>

      {/* Sticky Note Board */}
      <div className="sticky-board">
        {posts.map((post) => (
          <div key={post.id} className="sticky-note">
            <span className="sticker-badge">{post.sticker}</span>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '6px' }}>
              👤 {post.author}
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.5 }}>
              {post.message}
            </p>
            <div style={{ fontSize: '0.72rem', marginTop: '10px', textAlign: 'right', opacity: 0.7 }}>
              {post.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
