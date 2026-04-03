import { useState, useEffect, useRef } from 'react';

export default function CountUp({ value, duration = 2000 }) {
  const [displayValue, setDisplayValue] = useState(() => {
    const stringValue = String(value);
    const match = stringValue.match(/^([^0-9.]*)([0-9.]+)([^0-9.]*)$/);
    if (match) {
      return `${match[1]}0${match[3]}`;
    }
    return stringValue;
  });
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const stringValue = String(value);
    const match = stringValue.match(/^([^0-9.]*)([0-9.]+)([^0-9.]*)$/);
    
    if (!match) {
      setDisplayValue(stringValue);
      return;
    }
    
    const prefix = match[1];
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3];
    const isInteger = !match[2].includes('.');
    
    let startTimestamp = null;
    let animationFrameId;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentNumber = targetNumber * easeProgress;
      
      const formattedNumber = isInteger 
        ? Math.floor(currentNumber).toString()
        : currentNumber.toFixed(match[2].split('.')[1]?.length || 1);
        
      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(stringValue);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, duration, isVisible]);

  return <span ref={elementRef}>{displayValue}</span>
}
