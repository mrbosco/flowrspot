import styled from 'styled-components';

import useFlowers from './useFlowers';
import FlowerCard from '../../components/FlowerCard/FlowerCard';
import Spinner from '../../components/Spinner';

const FlowerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;

const FlowerList: React.FC = () => {
  const { flowers, isLoading } = useFlowers();

  if (isLoading) return <Spinner />;

  return (
    <FlowerContainer>
      {flowers?.map((flower) => (
        <FlowerCard
          key={flower.id}
          name={flower.name}
          latinName={flower.latin_name}
          sightings={flower.sightings}
          isFavorite={flower.favorite}
          imageUrl={flower.profile_picture}
        />
      ))}
    </FlowerContainer>
  );
};

export default FlowerList;
