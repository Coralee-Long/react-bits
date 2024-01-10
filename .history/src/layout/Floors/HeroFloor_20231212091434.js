import styles from './HeroFloor.module.css';

const {"hero-floor": heroFloor,  "floor-container": floorContainer} = styles;
const HeroFloor = () => {
  return (
    <div className={styles.HeroFloor}>
      <div className={styles.floor-container}></div>
    </div>
  );
};
export default HeroFloor;
