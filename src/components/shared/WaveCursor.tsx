import  { useEffect, useState } from 'react';

const WaveCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = (e:any) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMousePos({ x: mouseX, y: mouseY });

      // Create particle trail occasionally
      if (Math.random() < 0.1) {
        createParticle(mouseX, mouseY);
      }
    };

    const createParticle = (x:any, y:any) => {
      const particle = document.createElement('div');
      particle.className = 'wave-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 50;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      
      particle.style.setProperty('--dx', dx + 'px');
      particle.style.setProperty('--dy', dy + 'px');
      
      const colors = ['#00d4ff', '#ff006e', '#8338ec', '#ffbe0b'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.boxShadow = `0 0 8px ${color}`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 2000);
    };

    const createClickRipple = (e:any) => {
      const ripple = document.createElement('div');
      ripple.className = 'click-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 800);
    };

    const handleMouseLeave = () => {
      const waveCursor = document.querySelector<HTMLElement>('.wave-cursor');
if (waveCursor) {
  waveCursor.style.opacity = '0';
}

    };

    const handleMouseEnter = () => {
const waveCursor = document?.querySelector<HTMLElement>('.wave-cursor');
if (waveCursor) {
  waveCursor.style.opacity = '1';
}
    };

    // Event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('click', createClickRipple);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup function
    return () => {
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('click', createClickRipple);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div 
      className="wave-cursor"
      style={{
        left: mousePos.x,
        top: mousePos.y,
      }}
    >
      <div className="wave-ring"></div>
      <div className="wave-ring"></div>
      <div className="wave-ring"></div>
      <div className="wave-ring"></div>
      <div className="cursor-center"></div>
    </div>
  );
};

export default WaveCursor;