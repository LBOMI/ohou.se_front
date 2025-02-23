import { useState, useEffect} from 'react';

function Counter() {
  const [count, setCount] = useState(10 * 60 * 60);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => {
        if(prevCount <= 0) {
          clearInterval(id);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(id);
    
  }, []);
  
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600).toString().padStart(2,'0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };
  return <h1>{formatTime(count)} 남음</h1>;
}

export default Counter;