import styles from './HeroFloor.module.css';

const {heroFloor: "hero-floor", floorContainer: "floor-container"} = styles;
const HeroFloor = () => {
  return (
    <div className={styles.HeroFloor}>
      <div className={styles.floor-container}></div>
    </div>
  );
};
export default HeroFloor;
