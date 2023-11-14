import FlowerCard from '../components/FlowerCard/FlowerCard';

const Home = () => {
  return (
    <div>
      <h1>Welcome to FlowrSpot</h1>
      <FlowerCard
        imageUrl="https://i.imgur.com/rIErF94.png"
        name="Balloon Flower"
        latinName="Platycodon grandiflorus"
        sightings={127}
      />
    </div>
  );
};

export default Home;
