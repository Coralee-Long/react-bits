import styles from './HeroFloor.module.css';

const {heroFloor: "hero-floor": heroFloor, floorContainer: "floor-container"} = styles;
const HeroFloor = () => {
  return (
    <div className={styles.HeroFloor}>
      <div className={styles.floor-container}></div>
    </div>
  );
};
export default HeroFloor;
