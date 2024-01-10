import styles from './HeroBanner.module.css';

const {  'floor-container': bannerContainer } = styles;
const HeroFloor = () => {
  return (
    <div className={bannerContainer}>
      <h1>Test text here</h1>
    </div>
  );
};
export default HeroFloor;
