// components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className="text-xl focus:outline-none">
      {theme === 'dark' ? (
        <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;
