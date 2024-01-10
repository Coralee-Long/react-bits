import styles from './HeroFloor.module.css';
import HeroBanner from '../../components/HeroBannerParallax/HeroBanner';

const { 'floor': floor, 'floor-container': floorContainer } = styles;
const Floor = () => {
  return (
    <div className={floor}>
      <div className={floorContainer}>
        <HeroBanner />
      </div>
    </div>
  );
};
export default Floor;
