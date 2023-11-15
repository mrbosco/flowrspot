/// <reference types="vite-plugin-svgr/client" />
import React from 'react';

import FavoriteIcon from '../assets/favorite.svg?react';
import FavoriteFilledIcon from '../assets/favorite-filled.svg?react';
import { useAuthStore } from '../stores/useAuthStore';
interface Props {
  isFavorite: boolean;
  onClick?: () => void;
  className?: string;
}

const Favorite: React.FC<Props> = ({
  isFavorite = false,
  onClick,
  className,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const isAuthenticated = useAuthStore((state) => state.isLoggedIn);

  if (!isAuthenticated) return null;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {isFavorite || isHovered ? <FavoriteFilledIcon /> : <FavoriteIcon />}
    </div>
  );
};

export default Favorite;
