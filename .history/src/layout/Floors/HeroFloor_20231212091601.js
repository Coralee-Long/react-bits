import styles from './HeroFloor.module.css';

const { 'hero-floor': heroFloor, 'floor-container': floorContainer } = styles;
const HeroFloor = () => {
  return (
    <div className={heroFloor}>
      <div className={floorContainer}><h1></h1></div>
    </div>
  );
};
export default HeroFloor;
