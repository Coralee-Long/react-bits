import styles from './HeroFloor.module.css';
import HeroBanner from '../../components/HeroBannerParallax/HeroBanner';

const { 'hero-floor': heroFloor, 'floor-container': floorContainer } = styles;
const HeroFloor = () => {
  return (
    <div className={heroFloor}>
      <div className={floorContainer}>
        <HeroBanner />
      </div>
    </div>
  );
};
export default HeroFloor;
