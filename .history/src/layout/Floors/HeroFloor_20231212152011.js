import styles from './HeroFloor.module.css';
import HeroBanner from '../../components/HeroBannerParallax/HeroBanner';

const { 'hero-floor': heroFloor, 'floor-container': floorContainer } = styles;
const HeroFloor = () => {
  return (
    <div className={heroFloor}>
      <div className={floorContainer}>
<        <h1>Test text here</h1>>
      </div>
    </div>
  );
};
export default HeroFloor;
