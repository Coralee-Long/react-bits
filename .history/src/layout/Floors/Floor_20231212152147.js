import styles from './HeroFloor.module.css';
import HeroBanner from '../../components/HeroBannerParallax/HeroBanner';

const { 'floor': floor, 'floor-container': floorContainer } = styles;
const loor = () => {
  return (
    <div className={heroFloor}>
      <div className={floorContainer}>
        <HeroBanner />
      </div>
    </div>
  );
};
export default Floor;
