import styles from './HeroBanner.module.css';
import Button from '../commons/Button/Button';

const { 'banner-container': bannerContainer } = styles;
const HeroBanner = () => {
  return (
    <div className={bannerContainer}>
      <div></div>
      <Button>Button Text</Button>
    </div>
  );
};
export default HeroBanner;
