import styles from './HeroBanner.module.css';

const { 'hero-floor': heroFloor, 'floor-container': floorContainer } = styles;
const HeroFloor = () => {
  return (
    <div className={heroFloor}>
      <div className={floorContainer}>
        <h1>Test text here</h1>
      </div>
    </div>
  );
};
export default HeroFloor;
