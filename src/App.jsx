import React, { useState } from 'react';
import Header from './components/Header';
import PageCover from './components/PageCover';
import PageDirectorMessage from './components/PageDirectorMessage';
import PageThemeFeature from './components/PageThemeFeature';
import PageStudentShowcase from './components/PageStudentShowcase';
import PageRadarEvaluation from './components/PageRadarEvaluation';
import PagePhotoGallery from './components/PagePhotoGallery';
import PageParentGuestbook from './components/PageParentGuestbook';

import { magazineData } from './data/magazineData';
import { ChevronLeft, ChevronRight, BookOpen, Layers, X } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState('flipbook'); // 'flipbook' or 'slide'
  const [currentPage, setCurrentPage] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [lightboxImg, setLightboxImg] = useState(null);

  const totalPages = 20;

  const handleNextPage = () => {
    if (viewMode === 'flipbook') {
      setCurrentPage(prev => Math.min(prev + 2, totalPages));
    } else {
      setCurrentPage(prev => Math.min(prev + 1, totalPages));
    }
  };

  const handlePrevPage = () => {
    if (viewMode === 'flipbook') {
      setCurrentPage(prev => Math.max(prev - 2, 1));
    } else {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  };

  // Render content based on active page number
  const renderPageContent = (page) => {
    if (page === 1) {
      return (
        <PageCover 
          magazineData={magazineData} 
          onStartRead={() => setCurrentPage(2)} 
        />
      );
    }
    if (page === 2 || page === 3) {
      return (
        <PageDirectorMessage 
          messageData={magazineData.directorMessage} 
        />
      );
    }
    if (page === 4 || page === 5) {
      return (
        <PageThemeFeature 
          theme={magazineData.themes[0]} 
          pageNum={4} 
          onOpenLightbox={setLightboxImg} 
        />
      );
    }
    if (page === 6 || page === 7) {
      return (
        <PageThemeFeature 
          theme={magazineData.themes[1]} 
          pageNum={6} 
          onOpenLightbox={setLightboxImg} 
        />
      );
    }
    if (page === 8 || page === 9) {
      return (
        <PageThemeFeature 
          theme={magazineData.themes[2]} 
          pageNum={8} 
          onOpenLightbox={setLightboxImg} 
        />
      );
    }
    if (page >= 10 && page <= 13) {
      return (
        <PageStudentShowcase 
          showcaseList={magazineData.showcase} 
        />
      );
    }
    if (page === 14 || page === 15) {
      return (
        <PageRadarEvaluation 
          competencies={magazineData.competencies} 
          teacherComments={magazineData.teacherComments} 
        />
      );
    }
    if (page >= 16 && page <= 19) {
      return (
        <PagePhotoGallery 
          themes={magazineData.themes} 
          onOpenLightbox={setLightboxImg} 
        />
      );
    }
    if (page === 20) {
      return (
        <PageParentGuestbook 
          initialGuestbook={magazineData.guestbook} 
        />
      );
    }

    return null;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header Navbar */}
      <Header 
        viewMode={viewMode}
        setViewMode={setViewMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        currentPage={currentPage}
        totalPages={totalPages}
        onNavigatePage={setCurrentPage}
      />

      {/* Main Magazine View Container */}
      <main className="magazine-container">
        {viewMode === 'flipbook' ? (
          <div className="flipbook-stage">
            <div className="flipbook-spread">
              {renderPageContent(currentPage)}
            </div>
          </div>
        ) : (
          <div className="slide-stage">
            <div className="slide-card">
              {renderPageContent(currentPage)}
            </div>
          </div>
        )}

        {/* Bottom Pagination Bar */}
        <div className="pagination-bar">
          <button 
            className="btn-nav-page" 
            onClick={handlePrevPage}
            disabled={currentPage <= 1}
          >
            <ChevronLeft size={18} />
            <span>上一頁</span>
          </button>

          <span className="page-indicator">
            {viewMode === 'flipbook' 
              ? `P.${currentPage} - P.${Math.min(currentPage + 1, totalPages)} / P.${totalPages}`
              : `P.${currentPage} / P.${totalPages}`}
          </span>

          <button 
            className="btn-nav-page" 
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
          >
            <span>下一頁</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
            <X size={24} />
          </button>
          <img 
            src={lightboxImg} 
            alt="放大照片" 
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
}
