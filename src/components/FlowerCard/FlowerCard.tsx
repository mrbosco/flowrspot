/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '../Button/Button';
import Favorite from '../Favorite';
import styles from './FlowerCard.module.scss';

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
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <div className={styles.cardFavorite}>
          <Favorite isFavorite={isFavorite} />
        </div>
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <p className={styles.cardSubtitle}>{latinName}</p>
          <Button className={styles.cardSightings} size="small">
            {sightings} sightings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
