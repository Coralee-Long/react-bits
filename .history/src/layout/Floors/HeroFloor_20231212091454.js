import styles from './HeroFloor.module.css';

const { 'hero-floor': heroFloor, 'floor-container': floorContainer } = styles;
const HeroFloor = () => {
  return (
    <div className={heroFloor}>
      <div className={floorContainer}></div>
    </div>
  );
};
export default HeroFloor;
