import styled from 'styled-components';

import useFlowers from '../../hooks/flowers/useFlowers';
import FlowerCard from '../../components/FlowerCard';
import Spinner from '../../components/Spinner';

const FlowerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.spacingDefault};

  @media screen and (max-width: ${(props) => props.theme.breakpointTablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${(props) => props.theme.spacingXs};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpointMobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${(props) => props.theme.spacingDefault};
  }
`;

const FlowerList: React.FC = () => {
  const { data, isLoading } = useFlowers();

  if (isLoading) return <Spinner data-testid="spinner" />;

  return (
    <FlowerContainer>
      {data?.flowers?.map((flower) => (
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
