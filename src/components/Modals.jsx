import { AnimatePresence, m } from 'framer-motion';
import { useState, useRef } from 'react';
import useStore from '../stores/useStores';

export const SpringModal = () => {
  const { resumeModalOpen, setResumeModalOpen } = useStore();
  const [index, setIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(2);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);
  const images = ['/ResumeImg1.png', '/ResumeImg2.png'];
  return (
    <AnimatePresence>
      {resumeModalOpen && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setResumeModalOpen(false)}
          className="top-0 left-0 z-[5000] fixed flex justify-center smartphone:items-center bg-slate-900/20 backdrop-blur backdrop-grayscale p-1 w-screen h-screen overflow-y-scroll cursor-pointer"
        >
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-gradient-to-br from-black/90 to-darkGray/80 shadow-xl p-5 rounded w-[95%] max-w-6xl overflow-hidden text-white cursor-default"
            style={{ height: 'calc(100vh - 2rem)' }}
          >
            {/* Image area - centered container with overlay zoom */}
            <div className="relative flex justify-center items-center w-full h-full min-h-[50vh]">
              <div
                className="relative w-full h-full"
                onMouseMove={e => {
                  if (imageRef.current) {
                    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
                    const x = ((e.clientX - left) / width) * 100;
                    const y = ((e.clientY - top) / height) * 100;
                    setMousePosition({
                      x: Math.max(0, Math.min(100, x)),
                      y: Math.max(0, Math.min(100, y)),
                    });
                  }
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchStart={() => setIsHovering(true)}
                onTouchEnd={() => setIsHovering(false)}
                onTouchMove={e => {
                  const t = e.touches[0];
                  if (t && imageRef.current) {
                    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
                    const x = ((t.clientX - left) / width) * 100;
                    const y = ((t.clientY - top) / height) * 100;
                    setMousePosition({
                      x: Math.max(0, Math.min(100, x)),
                      y: Math.max(0, Math.min(100, y)),
                    });
                  }
                }}
              >
                <img
                  ref={imageRef}
                  src={images[index]}
                  alt={`Resume ${index + 1}`}
                  className="w-full h-full object-contain"
                />

                {isHovering && (
                  <div
                    className="top-0 left-0 absolute w-full h-full overflow-hidden pointer-events-none"
                    style={{
                      backgroundImage: `url(${images[index]})`,
                      backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                      backgroundSize: `${zoomLevel * 100}%`,
                      backgroundRepeat: 'no-repeat',
                      opacity: 1,
                    }}
                  />
                )}
              </div>

              <h2 className="bottom-2 absolute bg-black/20 backdrop-blur-md px-4 py-1 rounded-full text-white">
                Hover over Image to zoom
              </h2>

              <button
                onClick={() => setResumeModalOpen(false)}
                className="top-2 right-2 absolute bg-white/8 hover:bg-white/20 shadow-sm hover:shadow-md backdrop-blur-md p-2 px-3 rounded-full text-white active:scale-95 transition-transform"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="right-2 bottom-2 absolute flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1 pl-4 rounded-full">
                <span className="text-white text-sm">Zoom - {zoomLevel}x</span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setZoomLevel(prev => Math.max(1, +(prev - 0.5).toFixed(2)));
                  }}
                  className="bg-white/8 hover:bg-white/20 shadow-sm hover:shadow-md p-2 rounded-full text-white active:scale-95 transition-transform"
                  aria-label="Zoom out"
                >
                  −
                </button>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setZoomLevel(prev => Math.min(4, +(prev + 0.5).toFixed(2)));
                  }}
                  className="bg-white/12 hover:bg-white/24 shadow-sm hover:shadow-md p-2 rounded-full text-white active:scale-95 transition-transform"
                  aria-label="Zoom in"
                >
                  +
                </button>
              </div>

              <div className="bottom-2 left-2 absolute flex items-center gap-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setIndex(i => Math.max(0, i - 1));
                  }}
                  disabled={index === 0}
                  className="disabled:opacity-50 shadow-sm hover:shadow-md px-4 py-2 rounded-md font-medium text-indigo-600 active:scale-95 transition disabled:cursor-not-allowed"
                >
                  Prev
                </button>
                <div className="text-white text-sm">
                  {index + 1} / {images.length}
                </div>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setIndex(i => Math.min(images.length - 1, i + 1));
                  }}
                  disabled={index === images.length - 1}
                  className="disabled:opacity-50 shadow-sm hover:shadow-md px-4 py-2 rounded-md font-medium text-indigo-600 active:scale-95 transition disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
