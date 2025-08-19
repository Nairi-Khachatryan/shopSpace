import React from 'react';
import { FaMoon } from 'react-icons/fa6';
import s from '../index.module.scss';
import { IoSunnyOutline } from 'react-icons/io5';

interface Props {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export const ThemeToggleButton= ({ theme, onToggle }: Props) => {
  return theme === 'light' ? (
    <FaMoon className={s.themeBtn} onClick={onToggle} />
  ) : (
    <IoSunnyOutline className={s.themeBtn} onClick={onToggle} />
  );
};
