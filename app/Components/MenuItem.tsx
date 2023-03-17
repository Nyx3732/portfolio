import { useRef, useState, useEffect } from 'react';

interface MenuItemProps {
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  const [width, setWidth] = useState(1);
  const [progress, setProgress] = useState(false);
  const [hover, setHover] = useState(false);
  const myBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progress) {
      const id = setInterval(frame, 2);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          setProgress(false);
        } else {
          setWidth((prevWidth) => prevWidth + 1);
        }
      }
      return () => clearInterval(id);
    }
  }, [progress, width]);

  useEffect(() => {
    if (myBar.current) {
      myBar.current.style.width = width + '%';
    }
  }, [width]);

  return (
    <div className="relative">
      <p
        className={`${hover ? 'text-green-1' : ''}`}
        onMouseEnter={() => {
          setHover(true);
          setWidth(1);
          setProgress(true);
        }}
        onMouseLeave={() => {
          setHover(false);
          setProgress(false);
          setWidth(1);
        }}
      >
        {text}
      </p>
      <div className="absolute left-0 w-full h-1">
        <div
          ref={myBar}
          className={`h-1 ${hover ? 'bg-white' : 'bg-transparent'}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MenuItem;
