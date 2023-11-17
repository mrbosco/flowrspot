/// <reference types="vite-plugin-svgr/client" />
import React from 'react';

import FavoriteIcon from '../assets/icons/favorite.svg?react';
import FavoriteFilledIcon from '../assets/icons/favorite-filled.svg?react';

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
