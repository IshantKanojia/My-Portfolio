import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for mutable values to avoid re-renders during animation loops
  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Move the small dot instantly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Animation loop for the trailing circle (smooth lerp)
    let animationFrameId: number;
    
    const animate = () => {
      // Linear interpolation (lerp) for smooth following
      // ease factor: 0.1 (lower = slower/smoother, higher = faster)
      follower.current.x += (mouse.current.x - follower.current.x) * 0.15;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main small dot */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-ai-accent rounded-full pointer-events-none z-[100] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: 'transform' }} 
      />
      
      {/* Trailing ring */}
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 border border-ai-purple rounded-full pointer-events-none z-[99] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
          ${isHovering ? 'w-12 h-12 bg-ai-purple/10 border-ai-accent' : 'w-8 h-8 opacity-50'}
        `}
        style={{ willChange: 'transform' }}
      >
        <div className={`w-1 h-1 bg-white rounded-full transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
      </div>
    </>
  );
};

export default Cursor;