import React from 'react';
import Button from '../Button';
import Favorite from '../Favorite';
import { ButtonSizes } from '../Button/types';
import styles from './styles.module.scss';
import { useIsLoggedIn } from '../../stores/useAuthStore';

interface FlowerCardProps {
  imageUrl: string;
  name: string;
  latinName: string;
  sightings: number;
  isFavorite?: boolean;
}

const FlowerCard: React.FC<FlowerCardProps> = ({
  imageUrl,
  name,
  latinName,
  sightings,
  isFavorite = false,
}) => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <div className={styles.cardFavorite}>
          {isLoggedIn && <Favorite isFavorite={isFavorite} />}
        </div>
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <p className={styles.cardSubtitle}>{latinName}</p>
          <Button className={styles.cardSightings} size={ButtonSizes.SMALL}>
            {sightings} sightings
          </Button>
        </div>
      </div>
    </div>
  );
};

const MemoizedFlowerCard = React.memo(FlowerCard);

export default MemoizedFlowerCard;
