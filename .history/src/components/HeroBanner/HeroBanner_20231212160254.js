import styles from './HeroBanner.module.css';
import Button from '../commons/Button/Button';

const { 'banner-container': bannerContainer, "banner-contentbannerContent } = styles;
const HeroBanner = () => {
  return (
    <div className={bannerContainer}>
      <div className={bannerContent}></div>
      <Button>Button Text</Button>
    </div>
  );
};
export default HeroBanner;
